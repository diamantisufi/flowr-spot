import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import appLogo from 'assets/images/logo.png'
import { Close } from './Icons/Close'
import { store } from 'store'
import { ActiveModal } from 'helpers/types'
import modalAction from 'store/actions/modalAction'
import logoutAction from 'store/actions/logoutAction'

type Props = {
  menuOpen: boolean
  setMenuOpen: (state: boolean) => void
}

export const MobileMenu: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  const context = useContext(store)
  const dispatch = context?.dispatch

  if (!dispatch) {
    return null
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLoginClick = () => {
    dispatch(modalAction(ActiveModal.LOGIN))
    setMenuOpen(false)
  }

  const handleSettingsClick = () => {
    dispatch(modalAction(ActiveModal.PROFILE))
    setMenuOpen(false)
  }

  const handleLogout = () => {
    dispatch(logoutAction())
    setMenuOpen(false)
  }

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-auto'>
      <div className='flex justify-between items-center p-4 pl-8'>
        <Link to='/' className='flex items-center'>
          <img src={appLogo} alt='Logo' className='h-8 w-8 mr-2' />
          <span className='text-lg font-montserrat font-bold text-primary'>
            FlowrSpot
          </span>
        </Link>
        <button
          className='text-gray-600 hover:text-primary focus:outline-none'
          onClick={toggleMenu}
        >
          <Close />
        </button>
      </div>
      {menuOpen && (
        <div className='py-4 mt-20 px-10 flex flex-col gap-14 font-medium font-ubuntu'>
          <Link to='/' className='block text-secondary hover:text-primary'>
            Flowers
          </Link>
          <Link to='/' className='block text-secondary hover:text-primary'>
            Latest Sightings
          </Link>
          <Link to='/' className='block text-secondary hover:text-primary'>
            Favorites
          </Link>
          <div
            onClick={handleSettingsClick}
            className='block text-secondary hover:text-primary cursor-pointer'
          >
            Settings
          </div>
          <div
            onClick={handleLoginClick}
            className='block text-secondary hover:text-primary cursor-pointer'
          >
            Login
          </div>
          <button
            className='button-primary rounded p-5 w-1/3'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
