import React, { useState } from 'react'
import { FlowerListResponseData } from 'helpers/types'

type FlowerItemProps = {
  flower: FlowerListResponseData
}

export const FlowerItem: React.FC<FlowerItemProps> = ({ flower }) => {
  const [favorite, setFavorite] = useState(false)

  return (
    <div className="relative  h-[22rem]">
      <img
        src={flower?.profile_picture}
        alt={flower?.name}
        className="w-full h-full object-cover object-center rounded"
      />
      <div
        className=" absolute inset-0 "
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.7) 89.5%)',
        }}
      >
        <div className="absolute top-2 right-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 flex flex-col justify-center text-center font-ubuntu text-white">
          <h2 className="text-xl">{flower?.name}</h2>
          <p className="text-xs italic mb-5leading-3 opacity-70">
            {flower?.latin_name}
          </p>
          <button className="text-white text-center font-ubuntu text-xs italic font-light leading-3 mt-5">
            <p className="text-gray-300">{flower?.sightings}</p>
          </button>
        </div>
      </div>
    </div>
  )
}
