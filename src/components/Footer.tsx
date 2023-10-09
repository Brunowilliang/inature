import Link from 'next/link'
import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="bg-pattern flex flex-col gap-5 items-center justify-center pt-20 pb-3">
        <h1 className="text-2xl font-bold text-secondary">iNature</h1>

      <div className='flex flex-col md:flex-row items-center gap-3 md:gap-6'>
        <Link href='/politica-de-privacidade' className="text-base text-secondary">
          Política de Privacidade
        </Link>
        <Link href='/politica-de-troca-e-devolucao'
        className="text-base text-secondary">
          Política de Troca e Devolução
        </Link>
      </div>

        <p className="text-sm text-secondary">
          &copy; {year} iNature, Inc. todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
