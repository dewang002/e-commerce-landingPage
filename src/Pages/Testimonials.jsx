import React from 'react'
import TestimonialCard from '../component/TestimonialCard'

const Testimonials = () => {
  return (
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
  )
}

export default Testimonials