import React, { useEffect, useState } from 'react'
import { FlowerList } from 'components/Flower/FlowerList'
import { fetchFlowers } from 'services/FlowerService'

export const Hero: React.FC = () => (
  <div className="h-[500px] relative bg-cover bg-center bg-hero-image">
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-4 font-montserrat">
          Discover Flowers around you
        </h1>
        <p className="text-lg">Explore between more than 8.427 sightings</p>
        <input
          className="h-[70px] text-secondary mt-10 w-full pl-5 text-lg font-ubuntu outline-none"
          placeholder="Looking for something specific?"
        />
      </div>
    </div>
  </div>
)

export const Homepage: React.FC = () => {
  const [flowers, setFlowers] = useState([])

  useEffect(() => {
    const getAllFlowers = async () => {
      await fetchFlowers()
        .then((data) => {
          setFlowers(data?.flowers)
        })
        .catch((e) => {
          console.log(e)
        })
    }

    getAllFlowers()
  }, [])

  return (
    <div className="flex flex-col">
      <Hero />
      <FlowerList data={flowers} />
    </div>
  )
}
