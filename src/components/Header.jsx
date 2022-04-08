import React from 'react'

export const Header = () => {
  return (
    <div className='fixed z-50 w-screen bg-slate-300 p-6 px-16 '>
      {/* Desktop & tablet */}
      <div className='hidden md:flex w-full h-full '>
        
      </div>

      {/* Hover phone */}
      <div className='block md:hidden w-full h-full '></div>
    </div>
  )
}
