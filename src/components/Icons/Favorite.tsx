import React from 'react'

type FavoriteIconProps = {
  active?: boolean
}

export const Favorite: React.FC<FavoriteIconProps> = ({ active }) => {
  return (
    <svg
      width='60'
      height='60'
      viewBox='0 0 60 60'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_57974_554)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M30 40C38.2843 40 45 33.2843 45 25C45 16.7157 38.2843 10 30 10C21.7157 10 15 16.7157 15 25C15 33.2843 21.7157 40 30 40Z'
          fill={active ? '#eaa79e' : 'white'}
        />
      </g>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M36.7184 24.4385C36.9739 24.1971 37.064 23.8457 36.9537 23.5175C36.8431 23.1892 36.5557 22.9554 36.2011 22.9065L33.0538 22.4657C32.9191 22.4459 32.8035 22.3654 32.7437 22.2488L31.3366 19.501C31.1788 19.1922 30.8573 19 30.5003 19C30.1431 19 29.8229 19.1922 29.6637 19.501L28.2567 22.2488C28.1968 22.3654 28.0813 22.4472 27.9466 22.4657L24.7993 22.9065C24.4446 22.9554 24.156 23.1892 24.0457 23.5175C23.9363 23.8457 24.0265 24.1984 24.2819 24.4385L26.5597 26.5766C26.6564 26.6684 26.701 26.7995 26.6779 26.928L26.1403 29.9479C26.0934 30.2138 26.1657 30.4733 26.3437 30.6765C26.6222 30.995 27.1064 31.0919 27.494 30.8947L30.3084 29.4692C30.4265 29.409 30.5739 29.4103 30.692 29.4692L33.5077 30.8947C33.6437 30.9643 33.7898 31 33.9411 31C34.2158 31 34.4774 30.8824 34.6567 30.6765C34.8347 30.4733 34.9073 30.2138 34.8601 29.9479L34.3225 26.928C34.2994 26.7995 34.344 26.6684 34.4406 26.5766L36.7184 24.4385Z'
        fill='#D4D8D9'
      />
      <defs>
        <filter
          id='filter0_d_57974_554'
          x='0'
          y='0'
          width='60'
          height='60'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='5' />
          <feGaussianBlur stdDeviation='7.5' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_57974_554'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_57974_554'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  )
}
