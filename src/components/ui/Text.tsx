import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import { ComponentProps } from 'react'

const paragraph = tv({
  base: [
    'text-base font-medium text-secondary',
    // 'hover:opacity-70',
    // 'active:opacity-70 ',
    // 'transition-all duration-350 ease-linear',
  ],

  variants: {
    bold: { true: 'font-bold' },
    semibold: { true: 'font-semibold' },
    medium: { true: 'font-medium' },
    light: { true: 'font-light' },
  }
})

export type TextProps = ComponentProps<'p'> & VariantProps<typeof paragraph>

export function Text(props: TextProps) {
  return (
    <p
      {...props}
      className={twMerge(paragraph({ 
        bold: props.bold,
        semibold: props.semibold,
        medium: props.medium,
        light: props.light,
      }), props.className)}
    />
  );
};
