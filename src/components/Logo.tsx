import React from 'react'
import logo from '@/assets/dog.png'

export type LogoProps = {
  width?: number;
  height?: number;
};

export default function Logo({ width, height }: LogoProps) {
  return (
    <div>
        <img src={logo} alt="Logo" className='text-primary' style={{ width, height }} />
    </div>
  )
}
