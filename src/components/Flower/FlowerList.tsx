import React from 'react'
import { FlowerItem } from './FlowerItem'
import { FlowerListResponseData } from 'helpers/types'

type FlowerListProps = {
  data: FlowerListResponseData[]
}

export const FlowerList: React.FC<FlowerListProps> = ({ data }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 mt-16'>
      {data?.map((flower, index) => (
        <FlowerItem key={flower?.id} flower={flower} />
      ))}
    </div>
  )
}
