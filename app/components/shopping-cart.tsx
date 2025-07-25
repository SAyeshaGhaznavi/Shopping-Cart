"use client"

import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Separator } from "./ui/seperator"
import { MinusIcon, PlusIcon, TrashIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { removeItem, updateQuantity, clearCart } from "@/lib/features/cart/cartSlice"
import { selectCartItems, selectCartTotal, selectCartItemCount } from "@/lib/features/cart/cartSelectors"

export default function ShoppingCart() {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(selectCartItems)
  const cartTotal = useAppSelector(selectCartTotal)
  const itemCount = useAppSelector(selectCartItemCount)

  const handleQuantityChange = (id: string, newQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }))
  }

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  if (cartItems.length === 0) {
    return (
      <Card className="sticky top-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCartIcon className="w-5 h-5" />
            Shopping Cart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between py-3">
          <span className="flex items-center gap-2">
            <ShoppingCartIcon className="w-5 h-5" />
            Shopping Cart
          </span>
          <span className="text-sm font-normal text-gray-500">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
            <div className="relative w-16 h-16 flex-shrink-0">
              <img
                src={item.image || "noImage.svg"}
                alt={item.name}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-gray-600 font-light truncate">{item.name}</h4>
              <p className="font-semibold text-green-600">${item.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-2">
                <Button
                  size="sm"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-red-50"
                >
                  <MinusIcon className="w-3 h-3" />
                </Button>

                <p className="text-gray-800">{item.quantity}</p>
                <Button
                  size="sm"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-green-50"
                >
                  <PlusIcon className="w-3 h-3 font-bold" />
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleRemoveItem(item.id)}
                  className="h-8 w-8 p-0 ml-2"
                >
                  <TrashIcon className="w-5 h-5 text-red-700" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex-col gap-4">
        <Separator />
        <div className="flex items-center justify-between w-full py-8">
        <div className="flex gap-5 items-center">
          <h1 className="text-xl font-semibold">Total:</h1>
          <h1 className="text-xl font-bold text-green-600">${cartTotal.toFixed(2)}</h1>
        </div>
        <div className="flex gap-x-4">
          <Button
            variant="outline"
            onClick={handleClearCart}
            className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
          >
            Clear Cart
          </Button>
          <Button className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md">
            Checkout
          </Button>
        </div>
      </div>
      </CardFooter>
    </Card>
  )
}
