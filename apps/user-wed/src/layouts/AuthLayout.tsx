import Image from 'next/image'
import React from 'react'

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-screen w-screen flex-center' style={{ height: '100vh' }}>
      <div className='bg-primary-pressed h-full w-full relative'>
        <Image src='/images/authBackground.png' alt='authBackground' width={1000} height={1000} className='h-full w-full object-fit' />
        <div className='absolute top-[182px] left-[72px] text-white w-[482px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="24" fill="white" />
          </svg>
          <p className='mt-4 font-semibold text-[56px] leading-[64px]'>Design with us</p>
          <p className='mt-4 text-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus nunc, ac rhoncus odio congue quis. Sed ac semper orci, eu porttitor lacus. </p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default AuthLayout