import React from 'react'
import ProductCard from '../component/ProductCard'

const Features = () => {
  return (
    <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold my-8">Featured Products</h2>

        <div className="flex flex-wrap justify-center w-full gap-6">
          <ProductCard img={'/yogaMat.jpg'} name="Yoga Mat" price={19.99} category="mat" rating={4.8} />

          <ProductCard img={'/Legging.png'} name="Yoga Leggings" price={29.99} category="Clothing" rating={4.7} />

          <ProductCard img={'/headPhone.jpg'} name="Wireless Headphones" price={129.99} category="Electronics" rating={4.6} badge="New" />

          <ProductCard img={'/dumble.png'} name="Light dumbles" price={49.99} category="GYM" rating={4.9} />
        </div>
      </section>
  )
}

export default Features