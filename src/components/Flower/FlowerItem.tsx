import React, { useState } from 'react'
import { FlowerListResponseData } from 'helpers/types'
import { Favorite as FavoriteIcon } from 'components/Icons/Favorite'

type FlowerItemProps = {
  flower: FlowerListResponseData
}

export const FlowerItem: React.FC<FlowerItemProps> = ({ flower }) => {
  const [favorite, setFavorite] = useState<boolean>(false)

  return (
    <div className='relative h-[22rem]'>
      <img
        src={flower?.profile_picture}
        alt={flower?.name}
        className='w-full h-full object-cover object-center rounded'
      />
      <div className='absolute inset-0 flowerItemCard'>
        <div
          className='absolute top-2 right-2 text-white cursor-pointer'
          onClick={() => setFavorite((fav) => !fav)}
        >
          <FavoriteIcon active={favorite} />
        </div>
        <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 flex flex-col justify-center text-center font-ubuntu text-white'>
          <h2 className='text-xl'>{flower?.name}</h2>
          <p className='text-xs italic mb-5leading-3 opacity-70'>
            {flower?.latin_name}
          </p>
          <div className='w-full flex items-center justify-center'>
            <button
              className={`text-white text-center font-ubuntu text-xs leading-3 my-5 bg-[#00000070] rounded-full w-1/2 py-3 px-4 ${
                favorite && 'button-primary'
              }`}
            >
              <p className='text-gray-300'>{flower?.sightings} sightings</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
