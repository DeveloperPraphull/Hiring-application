import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer select-none active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30',
        destructive:
          'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md shadow-red-500/20 hover:from-red-700 hover:to-red-600 hover:shadow-lg hover:shadow-red-500/30 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:shadow-md dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:text-gray-200',
        secondary:
          'bg-gray-100 text-gray-700 shadow-sm hover:bg-gray-200 hover:shadow-md dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700',
        ghost:
          'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-accent/50 dark:hover:text-white',
        link: 'text-blue-600 underline-offset-4 hover:underline hover:text-blue-700 dark:text-blue-400',
        success:
          'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-md shadow-emerald-500/20 hover:from-emerald-700 hover:to-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30',
        warning:
          'bg-gradient-to-r from-amber-500 to-amber-400 text-white shadow-md shadow-amber-500/20 hover:from-amber-600 hover:to-amber-500 hover:shadow-lg hover:shadow-amber-500/30',
      },
      size: {
        default: 'h-10 px-5 py-2.5 has-[>svg]:px-3',
        xs: 'h-7 rounded-md gap-1 px-2.5 text-xs has-[>svg]:px-2',
        sm: 'h-8 rounded-md gap-1.5 px-3.5 has-[>svg]:px-2.5',
        lg: 'h-11 rounded-lg px-7 text-base has-[>svg]:px-5',
        xl: 'h-12 rounded-xl px-8 text-base font-bold has-[>svg]:px-6',
        icon: 'size-10 rounded-lg',
        'icon-sm': 'size-8 rounded-md',
        'icon-lg': 'size-11 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
