import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/images/logo.png'
        width={54}
        height={54}
        priority
        alt='Logo img'
      />
    </Link>
  )
}

export default Logo