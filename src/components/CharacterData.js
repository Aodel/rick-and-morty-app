import React from 'react'

export const CharacterData = () => {
  return (
    <div className="icard w-80 min-h-fit  p-6" style={{ minwWidth: "200rem" }}>
    <div className="card-body bg-gray-100">
        <h5 className="text-gray-900 text-xl font-medium mb-3">
            {item.name}
        </h5>
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
</div>
  )
}
