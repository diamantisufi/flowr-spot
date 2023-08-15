import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import appLogo from 'assets/images/logo.png'
import { ActiveModal, User } from 'helpers/types'
import modalAction from 'store/actions/modalAction'
import { store } from 'store'
import { MobileMenu } from 'components/MobileMenu'
import { Burger } from 'components/Icons/Burger'
import { AuthenticatedMenu } from 'components/AuthenticatedMenu'

interface AppState {
  user: User
  activeModal: string
  auth: {
    token: string
  }
}

type Props = {
  user: User | null
}

export const Header: React.FC<Props> = ({ user }) => {
  const context = useContext(store)
  const dispatch = context?.dispatch
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const state = context?.state as AppState
  const isAuthenticated = !!state?.auth?.token

  if (!dispatch) {
    return null
  }

  const handleProfileClick = () => {
    dispatch(modalAction(ActiveModal.PROFILE))
  }
  return (
    <header className='flex w-full justify-between items-center p-4 shadow-md'>
      <Link
        to='/'
        data-testid='logo-link'
        className='flex items-center text-lg font-montserrat font-bold text-primary'
      >
        <img src={appLogo} alt='Logo' className='h-8 w-8 mr-2' />
        <span>FlowrSpot</span>
      </Link>
      <div className='flex items-center font-ubuntu text-secondary font-medium text-sm'>
        <div className='hidden lg:flex items-center gap-14 space-x-4'>
          {/* links to "/" cause of no requirements */}
          <Link to={'/'} id='test'>
            Flowers
          </Link>
          <Link to='/'>Latest Sightings</Link>
          <Link to='#flowers'>Favorites</Link>

          {!isAuthenticated && (
            <div
              onClick={() => dispatch(modalAction(ActiveModal.LOGIN))}
              className='text-primary cursor-pointer'
            >
              Login
            </div>
          )}
        </div>
        <div
          className='lg:hidden flex cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Burger />
        </div>
        {!isAuthenticated && (
          <button
            className='hidden lg:block button-primary text-white py-3 px-6 ml-9 rounded-[50px]'
            onClick={() => dispatch(modalAction(ActiveModal.REGISTER))}
          >
            New Account
          </button>
        )}

        {isAuthenticated && (
          <AuthenticatedMenu
            user={user}
            handleProfileClick={handleProfileClick}
          />
        )}

        {menuOpen && (
          <div className='lg:hidden flex '>
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />{' '}
          </div>
        )}
      </div>
    </header>
  )
}
