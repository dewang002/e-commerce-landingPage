import React, { useState } from 'react'

import { ShoppingCart, Heart, Menu, Cross } from "lucide-react"

const MobileMenu = ({ close }) => {
    return (
        <div className='h-100 w-full absolute z-50 top-0 left-0 bg-black/80 backdrop-blur-3xl'>
            <div className='p-2 flex justify-end'>
                <button onClick={() => close(false)} className='rotate-40'>
                    <Cross color='white' />
                </button>
            </div>
            <div className='h-full w-full'>
                <nav className="flex flex-col justify-center items-center text-md gap-4 ">
                    <a href="#" className="text-white  font-medium ">
                        Home
                    </a>
                    <a href="#" className="text-white  font-medium ">
                        Shop
                    </a>
                    <a href="#" className="text-white font-medium ">
                        Collections
                    </a>
                    <a href="#" className="text-white  font-medium ">
                        About
                    </a>
                </nav>
            </div>
        </div>
    )
}

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [heart, setHeart] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return isOpen ? <MobileMenu close={setIsOpen} />
        : (
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
                        <button onClick={()=>setHeart(!heart)} variant="ghost" size="icon" className="hidden md:flex">
                            {heart? <Heart className="h-5 w-5" fill={true} />: <Heart className="h-5 w-5" />}
                        </button>
                        <button variant="ghost" size="icon" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </button>
                        <button onClick={handleClick} variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </header>
        )
}

export default Header