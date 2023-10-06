import Image from 'next/image';
import React from 'react'

type CardSickProps = {
  title: string;
  image: string;
  width?: number;
  height?: number;
}

export default function CardSick({
  title,
  image,
  width,
  height
}: CardSickProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Image
        src={image} 
        alt={title}
        width={width || 500}
        height={height || 500}
        quality={100}
        className="object-cover aspect-video rounded-xl"
      />
      <h4 className="text-xl font-semibold text-primary">
        {title}
      </h4>
    </div>
  )
}
