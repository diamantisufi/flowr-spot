import React from 'react'
import profileHolderImg from 'assets/images/profile-holder.png'

export const ProfileData: React.FC = () => {
  const ListLabel = ({ content }: { content: string }) => (
    <p className='text-secondary text-[10px] font-ubuntu leading-3 mb-1'>
      {content}
    </p>
  )
  const ListData = ({ content }: { content: string }) => (
    <h5 className='color-gray font-ubuntu font-normal text-lg'>{content}</h5>
  )

  return (
    <div className='px-20 py-10 flex-1'>
      <div className='flex items-center gap-8'>
        <img src={profileHolderImg} alt='profile' />
        <div className='font-ubuntu flex flex-col justify-center items-center'>
          <h2 className='text-gray text-2xl font-light'>Michael Berry</h2>
          <p className='text-sm text-secondary'>- sightings</p>
        </div>
      </div>
      <div className='flex flex-col mt-12 gap-8'>
        <div>
          <ListLabel content='Last Name' />
          <ListData content='Michael' />
        </div>
        <div>
          <ListLabel content='Last Name' />
          <ListData content='Michael' />
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
        >
          Logout
        </button>
      </div>
    </div>
  )
}
