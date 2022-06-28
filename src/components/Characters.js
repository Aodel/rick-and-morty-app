import React from 'react'

export const Characters = ({characters = []}) => {
  return (
    <div className="grid-rows-4">
        {characters.map((item,index)=>(
            <div key={index} className="grid-cols-4 gap">
                <div className="flex justify-center">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm">
                        <img className="rounded-t-lg" src={item.image} alt=""/>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{item.name}</h5>
                                <p className="text-gray-700 text-base mb-3">                                   
                                   Species: {item.species}
                                </p>
                                <p className="text-gray-700 text-base mb-3">                                   
                                   Gender: {item.gender}
                                </p>
                                <p className="text-gray-700 text-base mb-3">                                   
                                   Status: {item.status}
                                </p>
                                <button type="button" className=" inline-block px-6 py-2.5 border-2 border-black bg-lime-400  text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-200 hover:shadow-lg focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-150 ease-in-out">Button</button>    
                            </div>
                    </div>
                </div>
            </div>
        ))}

    </div>
  )
}
