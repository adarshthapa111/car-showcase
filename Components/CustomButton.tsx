"use client"
import { CustomButtonProps } from '@/types'
import React from 'react'
import Image from 'next/image'

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon}: CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type='button'
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
          <div className='relative w-6 h-6'>
              <Image src={rightIcon} alt="right icon" fill className='object-contain'/>
          </div>
        )}
    </button>

  )
}

export default CustomButton
