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
    <div className="min-h-screen bg-white">
      <div className="relative h-80 w-full bg-red-800 flex items-center justify-center">
      <h1 className="font-bold text-center text-[#EDEDED] text-8xl opacity-50 absolute object-contain z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Electronics
      </h1>
      <img
        src="bike.png"
        alt="Overlay"
        className="absolute w-80 h-80 object-contain z-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

    </div>

    <div className="container mx-auto px-4 py-8">
    <div>
      <div className="flex flex-row items-center justify-between w-full">
      <h2 className="text-2xl font-light text-red-800 mb-6">Products</h2> 
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
  </div>
  )
}