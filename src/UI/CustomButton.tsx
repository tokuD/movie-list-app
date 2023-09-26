import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const CustomButton = (props: Props) => {
  const { children, className, onClick } = props
  return (
    <button
      onClick={onClick}
      className={twMerge('bg-fuchsia-950 text-white py-2 px-4 rounded-2xl', className)}
    >
      {children}
    </button>
  )
}

export default CustomButton
