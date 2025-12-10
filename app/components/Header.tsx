import React from 'react'
import AnimatedBot from './AnimatedBot'

const Header = () => {
  return (
    <div className="w-full h-18 border-b border-neutral-300/80 flex justify-start px-12 gap-6 items-center z-10">
          <div className="bg-linear-to-bl shadow-[inset_6px_4px_12px_rgba(255,255,255,0.6),inset_-4px_-6px_8px_rgba(255,255,255,0.3),2px_6px_10px_rgba(0,0,0,0.2)] from-orange-600 via-orange-500 to-orange-300 w-10 h-10 flex items-center justify-center rounded-full">
            <AnimatedBot strokeColor="white" height={24} width={24} />
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">Deal Bot</h1>
            <p className="text-[10px] text-emerald-800">online</p>
          </div>
        </div>
  )
}

export default Header