import React from 'react'

export const Footer = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-zinc-800 text-gray-200 hover:text-lime-500 focus:text-lime-200 shadow-lg">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between mx-40 px-6">
            <div className="container-fluid ">
                <a href="https://github.com/aoliverasd" className="text-lg font-bold text-yellow-400"> 
                    <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" className="object-contain h-48 w-96 mx-16"/>CLICK! MyGITHUB</a>
            </div>
        </div>
    </nav>
  )
}
