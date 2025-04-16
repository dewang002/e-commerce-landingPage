import React from 'react'

const NewsLetter = () => {
  return (
    <section className="py-16 bg-blue-800 text-white">
    <div className="container mx-auto px-4 text-center">
      
      <h2 className="text-6xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="max-w-md font-semibold mx-auto mb-8">
        Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
      </p>
     
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 px-4 py-3 rounded-lg text-white border focus:outline-none"
        />
        <button className="bg-[#fdc500] p-2 rounded text-white font-semibold text-xl active:scale-95">Subscribe</button>
      </div>

    </div>
  </section>
  )
}

export default NewsLetter