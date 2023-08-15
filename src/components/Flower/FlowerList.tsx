import React from 'react'
import { FlowerItem } from './FlowerItem'
import { FlowerListResponseData } from 'helpers/types'
import { ErrorComponent } from 'components/Error'

type FlowerListProps = {
  data: FlowerListResponseData[]
  error?: string
  loading?: boolean
}

export const FlowerList: React.FC<FlowerListProps> = ({
  data,
  error,
  loading,
}) => {
  return (
    <div className='p-4 my-16 mx-2' id='flowers'>
      {error ? (
        <div className='p-10'>
          <ErrorComponent error={error} />
        </div>
      ) : (
        <>
          {!loading ? (
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              {data?.map((flower, index) => (
                <FlowerItem key={flower?.id} flower={flower} />
              ))}
            </div>
          ) : (
            <div className='flex w-full justify-center items-center p-10 text-center text-gray font-montserrat'>
              Loading flowers...
            </div>
          )}
        </>
      )}
    </div>
  )
}
