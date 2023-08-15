import React, { useContext } from 'react'
import profileHolderImg from 'assets/images/profile-holder.png'
import { User } from 'helpers/types'
import { store } from 'store'
import logoutAction from 'store/actions/logoutAction'
import modalAction from 'store/actions/modalAction'

type ProfileDataProps = {
  user: User | null
}

export const ProfileData: React.FC<ProfileDataProps> = ({ user }) => {
  const context = useContext(store)
  const dispatch = context?.dispatch
  if (!dispatch) {
    return null
  }

  const handleLogout = () => {
    dispatch(logoutAction())
    dispatch(modalAction(null))
  }

  const ListLabel = ({ content }: { content: string | undefined }) => (
    <p className='text-secondary text-[10px] font-ubuntu leading-3 mb-1'>
      {content}
    </p>
  )
  const ListData = ({ content }: { content: string | undefined }) => (
    <h5 className='color-gray font-ubuntu font-normal text-lg'>{content}</h5>
  )

  return (
    <div className='px-20 py-10 flex-1'>
      <div className='flex items-center gap-8'>
        <img src={profileHolderImg} alt='profile' />
        <div className='font-ubuntu flex flex-col justify-center items-center'>
          <h2 className='text-gray text-2xl font-light'>{user?.first_name}</h2>
          {/* - => missing data from Api */}
          <p className='text-sm text-secondary'>- sightings</p>
        </div>
      </div>
      <div className='flex flex-col mt-12 gap-8'>
        <div>
          <ListLabel content='Last Name' />
          <ListData content={user?.first_name} />
        </div>
        <div>
          <ListLabel content='Last Name' />
          <ListData content={user?.last_name} />
        </div>
        <div>
          <ListLabel content='Date of Birth ' />
          <ListData content='-' />
        </div>{' '}
        <div>
          <ListLabel content='Email Address' />
          <ListData content='-' />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button
          type='submit'
          className='button-primary mt-16 text-white font-ubuntu font-medium rounded px-14 py-4'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}
