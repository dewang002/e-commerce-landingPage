import React from 'react'
import CategoryCard from '../component/CategoryCard'

const CategorySection = () => {
  return (
    <section className="py-16 bg-neutral-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Shop by Category</h2>
      <div className=" flex flex-wrap justify-center gap-4">
        <CategoryCard img={'/Legging.png'} name="Clothing" itemCount={120} />
        <CategoryCard img={'/headPhone.jpg'} name="Accessories" itemCount={85} />
        <CategoryCard img={'/dumble.png'} name="Exercise" itemCount={42} />
      </div>
    </div>
  </section>
  )
}

export default CategorySection