import React from 'react'
import { render } from '@testing-library/react'
import { FlowerList } from 'components/Flower/FlowerList'
import { FlowerListResponseData } from 'helpers/types'

describe('FlowerList', () => {
  it('matches snapshot', () => {
    const mockFlowers: FlowerListResponseData[] = [
      {
        id: '1',
        name: 'Rose',
        latin_name: 'Rosa',
        profile_picture: 'rose.jpg',
        sightings: 10,
        favorite: true,
      },
      {
        id: '2',
        name: 'Sunflower',
        latin_name: 'Helianthus',
        profile_picture: 'sunflower.jpg',
        sightings: 15,
        favorite: false,
      },
      // Add more mock flower data as needed...
    ]

    const { asFragment } = render(<FlowerList data={mockFlowers} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
