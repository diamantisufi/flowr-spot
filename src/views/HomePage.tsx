import React, { useEffect, useState } from 'react'
import { FlowerList } from 'components/Flower/FlowerList'
import { fetchFlowers } from 'services/FlowerService'
import { Search as SearchIcon } from 'components/Icons/Search'

export const Hero: React.FC = () => (
  <div className='h-[500px] relative bg-cover bg-center bg-hero-image'>
    <div className='absolute inset-0 flex justify-center items-center'>
      <div className='text-white text-center'>
        <h1 className='text-4xl font-bold mb-4 font-montserrat'>
          Discover Flowers around you
        </h1>
        <p className='text-lg font-playfair'>
          Explore between more than 8.427 sightings
        </p>
        <div className='relative mt-10 '>
          <input
            className='h-[70px] text-secondary w-full pl-5 text-lg font-ubuntu outline-none font-light'
            placeholder='Looking for something specific?'
          />
          <div className='absolute right-5 top-0 h-full flex items-center'>
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const Homepage: React.FC = () => {
  const [flowers, setFlowers] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getAllFlowers = async () => {
      setLoading(true)
      await fetchFlowers()
        .then((data) => {
          setFlowers(data?.flowers)
        })
        .catch((e) => {
          setError(e?.response?.data?.error)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    getAllFlowers()
  }, [])

  return (
    <div className='flex flex-col'>
      <Hero />
      <FlowerList data={flowers} error={error} loading={loading} />
    </div>
  )
}
