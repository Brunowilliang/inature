'use client'
import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'


export default function Header() {
  const [isShowing, setIsShowing] = useState(false)
  const toggleMenu = () => setIsShowing(!isShowing)

  return (
    <>
      <header className="fixed bg-transparent w-full">
        <div className="flex h-24  p-4">
          <div className='flex items-center justify-between px-6 w-full h-full rounded-full bg-secondary'>
            <h1 className="text-2xl font-bold text-primary">iNature</h1>
              <motion.button
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondaryDark"
                initial={false}
                animate={{ rotate: isShowing ? 90 : 0 }}
              >
                {isShowing ? <XMarkIcon className='w-6 h-6 text-primary'/> : <Bars3Icon className='w-6 h-6 text-primary'/>}
              </motion.button>
          </div>   
        </div>
        <DropdownMenu toggleMenu={toggleMenu} isShowing={isShowing} />
      </header>
    </>
  )
}
