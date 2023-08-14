import React from 'react'
import { render, screen } from '@testing-library/react'
import { FlowerList } from 'components/Flower/FlowerList'
import { FlowerListResponseData } from 'helpers/types'

describe('FlowerList', () => {
  it('renders a list of FlowerItems', () => {
    const flowers: FlowerListResponseData[] = [
      {
        id: '1',
        name: 'Rose',
        latin_name: 'Rosa',
        profile_picture: 'rose.jpg',
        favorite: false,
        sightings: 10,
      },
      {
        id: '2',
        name: 'Lily',
        latin_name: 'Lilium',
        profile_picture: 'lily.jpg',
        favorite: true,
        sightings: 5,
      },
    ]

    render(<FlowerList data={flowers} />)

    flowers.forEach((flower) => {
      const flowerName = screen.getByText((content, element) => {
        return element?.textContent === flower?.name
      })
      expect(flowerName).toBeInTheDocument()
    })
  })
})
