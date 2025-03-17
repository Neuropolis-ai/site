'use client'
import React from 'react'

interface ButtonLinkProps {
  children?: React.ReactNode
  href?: string
  className?: string
  variant?: 'primary' | 'outline'
  variantBtn?: 'btn' | 'link'
  onClick?: () => void
}

const ButtonLink = ({ children, href = '/', className, variant = 'primary', variantBtn = 'btn', onClick }: ButtonLinkProps) => {
  if (variant === 'outline') {
    return (
      <a href={href} className={` text-white px-6 py-3 rounded-[12px] border border-[#363636] hover:bg-white/5 transition-colors ${className}`}>
        {children}
      </a>
    )
  }

  if (variantBtn === 'link') {
    return (
      <a
        href={href}
        style={{
          background: 'linear-gradient(180deg, #153aa1 0%, #00185e 100%)',
          position: 'relative',
          isolation: 'isolate',
          transition: 'all 0.3s ease'
        }}
        className={`text-white px-6 py-3 rounded-[12px] before:absolute before:inset-0 before:bg-[#153aa1] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-[1] before:rounded-[12px] ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      style={{
        background: 'linear-gradient(180deg, #153aa1 0%, #00185e 100%)',
        position: 'relative',
        isolation: 'isolate',
        transition: 'all 0.3s ease'
      }}
      className={`text-white px-6 py-3 rounded-[12px] before:absolute before:inset-0 before:bg-[#153aa1] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:-z-[1] before:rounded-[12px] ${className}`}
    >
      {children}
    </button>
  )
}

export default ButtonLink
