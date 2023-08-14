import { FlowerListResponseData } from 'helpers/types'
import React from 'react'

type FlowerListProps = {
  data: FlowerListResponseData[] | []
}
export const FlowerList: React.FC<FlowerListProps> = ({ data }) => {
  return <div>FlowerList</div>
}
