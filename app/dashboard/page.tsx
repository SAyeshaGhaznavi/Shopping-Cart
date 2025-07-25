import ProductList from "../components/product-list"
import ShoppingCart from "../components/shopping-cart"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
    {/* Cart Section */}
    <div>
      <h2 className="text-2xl font-light text-blue-900 mb-6">Cart</h2>
      <ShoppingCart />
    </div>
  </div>
  )
}
