import React from 'react'
import CountUp from 'react-countup';

type Props = {
  line1: string
  line2: string
  value: number
}

export default function Counter({ line1, line2, value }: Props) {
  return (
    <div className="w-full flex gap-4 text-start items-center justify-start">
      <div className='w-[90px]'>
        <CountUp
          start={0}
          end={value}
          duration={4}
          enableScrollSpy
          scrollSpyOnce
          className="text-[40px] font-bold"
          suffix="%"

        />
      </div>
      <div className="w-1 rounded-full h-7 bg-gray-300"/>
      <div className='space-y-1 ml-2'>
        <p className="text-base leading-5 font-semibold">
          {line1}
        </p>
        <p className="text-base leading-5 font-semibold">
          {line2}
        </p>
      </div>
    </div>
  )
}
