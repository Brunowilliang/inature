import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { ComponentProps } from 'react'

const button = tv({
  base: [
    'px-6 py-3 text-lg font-semibold rounded-full',
    'hover:opacity-70',
    'active:opacity-70 ',
    'transition-all duration-350 ease-linear',
  ],

  variants: {
    variant: {
      primary: [
        'bg-primary text-secondary',
      ],
      secondary: [
        'bg-secondary text-primary',
      ],
    },
  }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({variant, ...props}: ButtonProps) {
  return (
    <button 
      {...props} 
      className={twMerge(button({ variant }), props.className)}
    />
  )
}
