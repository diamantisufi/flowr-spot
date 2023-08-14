import React from 'react'
import { render, screen } from '@testing-library/react'
import { FlowerItem } from 'components/Flower/FlowerItem'
import { FlowerListResponseData } from 'helpers/types'

describe('FlowerItem', () => {
  it('renders flower details correctly', () => {
    const mockFlower: FlowerListResponseData = {
      id: '1',
      name: 'Rose',
      latin_name: 'Rosa',
      profile_picture: 'rose.jpg',
      sightings: 10,
      favorite: false,
    }

    render(<FlowerItem flower={mockFlower} />)

    // Assertions for flower details
    const flowerName = screen.getByText(mockFlower.name)
    const latinName = screen.getByText(mockFlower.latin_name)
    const sightings = screen.getByText(mockFlower.sightings.toString())

    expect(flowerName).toBeInTheDocument()
    expect(latinName).toBeInTheDocument()
    expect(sightings).toBeInTheDocument()
  })

  // Add more test cases if needed...
})
