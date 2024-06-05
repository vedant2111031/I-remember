import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-100 flex justify-between items-center px-5 py-4'>
      <div className='logo text-2xl font-bold'>
      <span className='text-blue-400'>I-</span>
      <span className='text-blue-600'>rem</span>
      <span className='text-blue-800'>ember</span>
      </div>
        <ul className=''>
          <li className='flex gap-3'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
