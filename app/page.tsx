"use client"

import ProductList from "./components/product-list"
//import ShoppingCart from "./components/shopping-cart"
import { selectCartItemCount } from "@/lib/features/cart/cartSelectors"
import { useAppSelector } from "@/lib/hooks"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { Button } from "./components/ui/button"
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const itemCount = useAppSelector(selectCartItemCount);
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Shopping Cart</h1>
    <div>
      <div className="flex flex-row items-center justify-between w-full">
      <h2 className="text-2xl font-light text-blue-900 mb-6">Products</h2> 
      <div className="m-8">
        <label className="text-sm font-normal text-gray-500">
            {itemCount} {itemCount === 1 ? "item" : "items"}
        </label>
      <Button
        size="sm"
        onClick={() => router.push("/dashboard")}
        className="h-10 w-12 flex items-center justify-center rounded-md hover:bg-gray-100 p-2"
      >
        <ShoppingCartIcon className="w-96 h-96 text-blue-900" />
      </Button>
      </div>
      </div>
      <ProductList />
    </div>
  </div>
  )
}