import React from 'react'
import {PropsWithChildren} from 'react'
import {twMerge} from "tailwind-merge";

const HeroOrbit = ({
                     children,
                     size,
                     rotation,
                     shouldOrbit = false,
                     orbitDuration,
                     shouldSpin = false,
                     spinDuration
                   }: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean
  shouldSpin?: boolean
  spinDuration?: string
  orbitDuration?: string
}>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className={twMerge(shouldOrbit && "animate-spin")} style={{
        animationDuration: orbitDuration,
      }}>
        <div className='flex items-start justify-start' style={{
          transform: `rotate(${rotation}deg)`,
          width: `${size}px`,
          height: `${size}px`
        }}>
          <div className={twMerge(shouldSpin && 'animate-spin')} style={{
            animationDuration: spinDuration,
          }}>
            <div className='inline-flex' style={{
              transform: `rotate(${rotation * -1}deg)`
            }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroOrbit
