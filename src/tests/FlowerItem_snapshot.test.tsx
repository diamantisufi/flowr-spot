import React from 'react'
import { render } from '@testing-library/react'
import { FlowerItem } from 'components/Flower/FlowerItem'
import { FlowerListResponseData } from 'helpers/types'

describe('FlowerItem', () => {
  it('matches snapshot', () => {
    const mockFlower: FlowerListResponseData = {
      id: '1',
      name: 'Rose',
      latin_name: 'Rosa',
      profile_picture: 'rose.jpg',
      sightings: 10,
      favorite: true,
    }

    const { asFragment } = render(<FlowerItem flower={mockFlower} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
