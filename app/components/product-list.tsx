"use client"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { useAppDispatch } from "@/lib/hooks"
import { addItem } from "@/lib/features/cart/cartSlice"
import { products } from "@/data/products"

export default function ProductList() {
  const dispatch = useAppDispatch()

  const handleAddToCart = (product: (typeof products)[0]) => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      }),
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col bg-gray-50 p-8 rounded-md">
          <CardHeader className="rounded-full">
            <img
              src={product.image || "/noImage.svg"}
              alt={product.name}
              height={10}
              width={5}
              className="w-full h-full object-cover rounded-md"
            />
          </CardHeader>
          <CardContent className="flex-1">
            <CardTitle className="text-gray-600 font-light mb-2">{product.name}</CardTitle>
            <p className="font-semibold text-green-600">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleAddToCart(product)} className="p-1 bg-sky-500 hover:bg-sky-600 text-white rounded-md">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
