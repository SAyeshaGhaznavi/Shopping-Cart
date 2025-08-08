"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function ShoppingHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <ShoppingCart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="hidden font-bold sm:inline-block">ShopHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="" className="transition-colors hover:text-primary">
            Categories
          </Link>
          <Link href="" className="transition-colors hover:text-primary">
            Deals
          </Link>
          <Link href="" className="transition-colors hover:text-primary">
            New Arrivals
          </Link>
          <Link href="" className="transition-colors hover:text-primary">
            Brands
          </Link>
        </nav>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-sm mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Search Button - Mobile */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Wishlist */}
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>

          {/* Shopping Cart */}
          <Button
            size="sm"
            onClick={() => router.push("/dashboard")}
            className="h-10 w-12 flex items-center justify-center rounded-md bg-gray-100 p-2 hover:bg-slate-200"
            >
            <ShoppingCart className="w-96 h-96 text-blue-900" />
        </Button>
        </div>
      </div>

      
    </header>
  )
}
