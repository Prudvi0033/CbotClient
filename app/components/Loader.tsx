import React from 'react'

export const Loader = () => {
  return (
    <div className='flex items-center justify-center gap-2 bg-neutral-200 w-fit p-4 rounded-md'>
         {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  )
}
