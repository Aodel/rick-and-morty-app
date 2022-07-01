import React from 'react'

export const Characters = ({characters = []}) => {
  return (
    <div className="gridrick grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-36 ">
        {characters.map((item,index)=>(
            <div key={index} className="">
                <div className="flex justify-center">
                    <div className="rounded-lg shadow-lg bg-white max-w-sm md:m-3">
                        <img className="rounded-t-lg w-full" src={item.image} alt=""/>
                            <div className="icard w-80 p-6" style={{minwWidth: "200rem"}} >
                                <div className="card-body bg-gray-100">
                                    <h5 className="text-gray-900 text-xl font-medium mb-3">{item.name}</h5>
                                    <p className="text-gray-700 text-base mb-2">                                   
                                    Species: {item.species}
                                    </p>
                                    <p className="text-gray-700 text-base mb-2">                                   
                                    Gender: {item.gender}
                                    </p>
                                    <p className="text-gray-700 text-base mb-2">                                   
                                    Status: {item.status}
                                    </p>
                                    <p className="text-gray-700 text-base mb-2">                                   
                                    Location: {item.location.name}
                                    </p>
                                </div>
                                <button type="button" class="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
                            dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                + Info      </button>
                            </div>
                    </div>
                </div>
            </div>
        ))}

    </div>
  )
}
