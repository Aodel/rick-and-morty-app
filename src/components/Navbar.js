import React from 'react'

const Navbar = ({ brand}) => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-zinc-800 text-gray-200 hover:text-lime-500 focus:text-lime-200 shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between mx-40 px-6">
            <div className="container-fluid">
                <a href="/" className="text-lg font-bold uppercase">{brand}</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar