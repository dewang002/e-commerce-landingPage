import React, { useState } from "react";
import { Heart } from "lucide-react"


function ProductCard({name,price,category,rating,badge,img}) {
    const [heart, setHeart] = useState(false)

    return (
        <div className="group relative w-sm bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            
            <div className="relative h-64 overflow-hidden">  
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <img className="object-contain  h-full w-full" src={img} alt="" />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
               
                <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={()=>setHeart(!heart)} variant="secondary" size="icon" className="rounded-full shadow-md">
                        {heart? <Heart className="h-5 w-5" fill={true} />: <Heart className="h-5 w-5" />}

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

export default ProductCard;