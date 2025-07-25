import ProductList from "./components/product-list"
import ShoppingCart from "./components/shopping-cart"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">Shopping Cart</h1>

  <div className="flex flex-col gap-12">
    <div>
      <h2 className="text-2xl font-light text-blue-900 mb-6">Products</h2>
      <ProductList />
    </div>
    <hr className="border-t border-gray-300" />
    <div>
      <h1 className="text-2xl font-light text-blue-900 mb-6">Cart</h1>
      <ShoppingCart />
    </div>
  </div>
</div>

  )
}
