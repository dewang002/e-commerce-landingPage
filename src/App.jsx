import React from "react"
import { ShoppingCart, Heart, Search, Menu, ChevronRight, ArrowRightIcon } from "lucide-react"

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="text-2xl font-bold">
              LUXEMART
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:bg-black hover:text-white p-1 rounded text-sm font-medium hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="hover:bg-black hover:text-white p-1 rounded text-sm font-medium hover:text-primary transition-colors">
                Shop
              </a>
              <a href="#" className="hover:bg-black hover:text-white p-1 rounded text-sm font-medium hover:text-primary transition-colors">
                Collections
              </a>
              <a href="#" className="hover:bg-black hover:text-white p-1 rounded text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </button>
            <button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-neutral-50 overflow-hidden">
        <div className="container mx-auto px-16 py-16 md:py-24 flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              New Collection 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Your <br />
              <span className="text-primary">Perfect Style</span>
            </h1>
            <p className="text-neutral-600 text-lg max-w-md">
              Elevate your wardrobe with our curated collection of premium fashion essentials.
            </p>
            <div className="flex flex-wrap gap-4">
              <button size="lg" className="active:scale-95 transition duration-100 rounded-full px-8 bg-black text-white p-2">
                Shop Now
              </button>
              <button size="lg" variant="outline" className="hover:bg-black hover:text-white transition-all duration-150 rounded-full px-2 flex gap-4 items-center justify-between border">
                Explore Collections
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          <div className="md:w-1/2 relative h-80 md:h-[500px] w-full rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img className="h-full w-full" src="/heroImg.jpg" alt="yogaImg" />
            </div>
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold">Featured Products</h2>
          <button variant="ghost" className="flex items-center gap-2 mb-4">
            View All <ChevronRight className="h-4 w-4" />
          </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Product 1 */}
          <ProductCard name="Premium Cotton T-Shirt" price={29.99} category="Clothing" rating={4.8} />

          {/* Product 2 */}
          <ProductCard
            name="Leather Crossbody Bag"
            price={89.99}
            category="Accessories"
            rating={4.9}
            badge="Best Seller"
          />

          {/* Product 3 */}
          <ProductCard name="Slim Fit Denim Jeans" price={59.99} category="Clothing" rating={4.7} />

          {/* Product 4 */}
          <ProductCard name="Wireless Headphones" price={129.99} category="Electronics" rating={4.6} badge="New" />

          {/* Product 5 */}
          <ProductCard name="Minimalist Watch" price={149.99} category="Accessories" rating={4.9} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CategoryCard name="Clothing" itemCount={120} />
            <CategoryCard name="Accessories" itemCount={85} />
            <CategoryCard name="Footwear" itemCount={64} />
            <CategoryCard name="Electronics" itemCount={42} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="The quality of the products exceeded my expectations. Will definitely shop here again!"
            author="Sarah Johnson"
            role="Verified Buyer"
          />
          <TestimonialCard
            quote="Fast shipping and the customer service is outstanding. Highly recommend!"
            author="Michael Chen"
            role="Verified Buyer"
          />
          <TestimonialCard
            quote="Love the unique selection of products. Found items I couldn't get anywhere else."
            author="Emma Rodriguez"
            role="Verified Buyer"
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="max-w-md mx-auto mb-8">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none"
            />
            <button className="bg-white text-primary hover:bg-neutral-100">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LUXEMART</h3>
              <p className="text-neutral-400 mb-4">
                Elevating everyday essentials with premium quality and thoughtful design.
              </p>
              <div className="flex space-x-4">
                <button variant="ghost" size="icon" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button variant="ghost" size="icon" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </button>
                <button variant="ghost" size="icon" className="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    All Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
            <p>© 2025 LUXEMART. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Product Card Component
function ProductCard({
  name,
  price,
  category,
  rating,
  badge,
}) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {badge && (
        <div className="absolute top-2 left-2 z-10 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
          {badge}
        </div>
      )}
      <div className="relative h-64 bg-neutral-100 overflow-hidden">
        {/* Product image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-neutral-400">Product Image</div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
        <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button variant="secondary" size="icon" className="rounded-full shadow-md">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-neutral-500 mb-1">{category}</div>
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="font-bold">${price.toFixed(2)}</span>
          <div className="flex items-center text-sm">
            <span className="text-yellow-500 mr-1">★</span>
            <span>{rating}</span>
          </div>
        </div>
        <button className="w-full mt-4 rounded-lg">Add to Cart</button>
      </div>
    </div>
  )
}

// Category Card Component
function CategoryCard({ name, itemCount }) {
  return (
    <div className="relative h-40 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="absolute inset-0 bg-neutral-100">
        {/* Category image placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-neutral-400">{name} Image</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 text-white">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm text-white/80">{itemCount} items</p>
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
    </div>
  )
}

// Testimonial Card Component
function TestimonialCard({ quote, author, role }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border">
      <div className="text-yellow-500 flex mb-4">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <p className="text-neutral-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-neutral-200 mr-3 flex items-center justify-center text-neutral-400 text-xs">
          {author.charAt(0)}
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  )
}
