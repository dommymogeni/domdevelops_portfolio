import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconStyles='text-[20px]'
          />
          <div className=''>
            &copy; Dominic osugo mogeni. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer