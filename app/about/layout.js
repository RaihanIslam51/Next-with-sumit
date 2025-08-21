import Link from 'next/link'
import React from 'react'

export default function Aboutlayout({children}) {
  return (
    <div>
        <nav className='flex gap-3'>
            <Link href="/">info</Link>
            <Link href="/">Details</Link>
        </nav>
      {children}
    </div>
  )
}
