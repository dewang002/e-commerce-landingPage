import { ArrowRightIcon } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative bg-neutral-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center">

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
              <button size="lg" variant="outline" className="hover:bg-black hover:text-white transition-all duration-150 rounded-full px-2 py-2 flex gap-4 items-center justify-between border">
                Explore Collections
                <ArrowRightIcon />
              </button>
            </div>
          </div>

          <div className="md:w-1/2 relative h-80 md:h-[500px] w-full rounded-xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img className="h-full w-full object-cover object-left md:object-center" src="/heroImg.jpg" alt="yogaImg" />
            </div>
          </div>

        </div>
      </section>
  )
}

export default HeroSection