import ProductList from "../components/product-list"
import ShoppingCart from "../components/shopping-cart"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold text-center mb-8">Redux Toolkit Shopping Cart</h1>

  <div className="flex flex-col gap-12">
    {/* Products Section */}
    <div>
      <h2 className="text-2xl font-semibold mb-6">Products</h2>
      <ProductList />
    </div>

    <hr className="border-t border-gray-300" />

    {/* Cart Section */}
    <div>
      <h2 className="text-2xl font-semibold mb-6">Cart</h2>
      <ShoppingCart />
    </div>
  </div>
</div>

  )
}
