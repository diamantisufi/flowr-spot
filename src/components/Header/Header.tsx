import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import appLogo from 'assets/images/logo.png'
import { ActiveModal } from 'helpers/types'
import modalAction from 'store/actions/modalAction'
import { store } from 'store'

export const Header: React.FC = () => {
  const context = useContext(store)
  const dispatch = context?.dispatch

  if (!dispatch) {
    return null
  }

  return (
    <>
      <header className="flex w-full justify-between items-center p-4 shadow-md">
        <Link
          to="/"
          className="flex items-center text-lg font-montserrat font-bold text-primary"
        >
          <img src={appLogo} alt="Logo" className="h-8 w-8 mr-2" />
          <span>FlowrSpot</span>
        </Link>
        <div className="flex items-center font-montserrat text-secondary font-medium">
          <div className="flex items-center gap-14 space-x-4">
            <Link to="/flowers">Flowers</Link>
            <Link to="/latest-sightings">Latest Sightings</Link>
            <Link to="/favorites">Favorites</Link>
            <div
              onClick={() => dispatch(modalAction(ActiveModal.LOGIN))}
              className="text-primary cursor-pointer"
            >
              Login
            </div>
          </div>
          <button
            className="button-primary text-white py-3 px-6 ml-9 rounded-[50px]"
            onClick={() => dispatch(modalAction(ActiveModal.REGISTER))}
          >
            New Account
          </button>
        </div>
      </header>
    </>
  )
}
