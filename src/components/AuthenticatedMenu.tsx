import { User } from 'helpers/types'
import React from 'react'
import profileHolderImg from 'assets/images/profile-holder.png'

type Props = {
  handleProfileClick: () => void
  user: User | null
}

export const AuthenticatedMenu: React.FC<Props> = ({
  handleProfileClick,
  user,
}) => {
  return (
    <div
      className='lg:flex hidden pr-5 text-[13px] items-center font-ubuntu text-secondary cursor-pointer'
      onClick={handleProfileClick}
    >
      <p className='mr-4 pl-20'>
        {user?.first_name} {user?.last_name}
      </p>
      <img src={profileHolderImg} alt='profile' width={40} />
    </div>
  )
}
