import React from "react";

function CategoryCard({ name, itemCount, img }) {
    return (
        <div className="relative h-64 w-sm bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="absolute inset-0 bg-neutral-100">
                <img src={img} alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 text-white">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-sm text-white/80">{itemCount} items</p>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>
    )
}

export default CategoryCard;