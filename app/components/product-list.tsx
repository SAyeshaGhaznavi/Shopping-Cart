"use client"

import { Button } from "@/components/ui/button"
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
    <div className="min-h-screen">
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-row h-30 w-80 justify-between bg- border-spacing-3 border-gray-200 border-2 p-8 rounded-md">
          <div className="flex flex-col">
          <CardContent className="flex-1">
            <CardTitle className="text-red-500 font-light mb-2">{product.name}</CardTitle>
            <p className="font-semibold text-green-600">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="mt-4">
            <Button onClick={() => handleAddToCart(product)} className="bg-slate-100 text-black">
              Add to Cart
            </Button>
          </CardFooter>
          </div>
          <CardHeader className="rounded-full h-20 w-50">
            <img
              src={product.image || "/noImage.svg"}
              alt={product.name}
              className="w-full h-full object-cover rounded-md shadow-black"
            />
          </CardHeader>
        </Card>
      ))}
    </div>
    </div>
  )
}
