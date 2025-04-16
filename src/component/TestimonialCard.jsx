import React from 'react'

const TestimonialCard = ({ quote, author, role }) => {
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

export default TestimonialCard