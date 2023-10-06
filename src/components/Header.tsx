'use client'
import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const HomeLinks = [
  { href: '/#beneficios', label: 'Beneficios' },
  { href: '/#composicao', label: 'Composição' },
  { href: '/#testes', label: 'Testes Clínicos' },
  { href: '/#ofertas', label: 'Ofertas' },
  { href: '/#faq', label: 'Perguntas frequentes' },
];

export default function Header() {
  const [isShowing, setIsShowing] = useState(false)
  const toggleMenu = () => setIsShowing(!isShowing)
  const pathname = usePathname();
  const links = pathname === '/' ? HomeLinks : undefined;

  return (
    <>
      <header className="fixed bg-transparent w-full z-30">
        <div className="flex h-24  p-4">
          <div className='flex items-center justify-between px-6 w-full h-full rounded-full bg-secondary'>
            <Link href='/' className='hover:opacity-80'>
              <h1 className="text-2xl font-bold text-primary">iNature</h1>
            </Link>
            {links && (
              <motion.button
                onClick={toggleMenu}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-secondaryDark"
                initial={false}
                animate={{ rotate: isShowing ? 90 : 0 }}
              >
                {isShowing ? <XMarkIcon className='w-6 h-6 text-primary'/> : <Bars3Icon className='w-6 h-6 text-primary'/>}
              </motion.button>
            )}
          </div>   
        </div>
        <DropdownMenu toggleMenu={toggleMenu} isShowing={isShowing} links={links} />
      </header>
    </>
  )
}
