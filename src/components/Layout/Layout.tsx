import React from 'react'
import { Header } from 'components/Header/Header'
import { Homepage } from 'views/HomePage'

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Homepage />
    </div>
  )
}
