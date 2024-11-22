

import React from 'react'

const ProjectReview = ({ title, description}) => {
  return (
    <div className='flex flex-col justify-start pointer-events-none items-start w-full lg:w-1/2'>  

      <div className="w-full text-slate-900/60 lg:w-1/2  lg:min-h-[90%] flex justify-start gap-4 pt-8 lg:pt-8 lg: pb-2 lg:pb-4">
        <span className="flex gap-2 items-center top-2 left-2 bg-neutral-100/25 border border-neubg-neutral-50 text-neubg-neutral-600 text-sm font-medium p-2 rounded-lg leading-none h-fit">
              Motion
        </span>
        <span className="flex gap-2 items-center top-2 left-2 bg-neutral-100/25 border border-neubg-neutral-50 text-neubg-neutral-600 text-sm font-medium p-2 rounded-lg leading-none h-fit">
              NextJs
        </span>
        <span className="flex gap-2 items-center top-2 left-2 bg-neutral-100/25 border border-neubg-neutral-50 text-neubg-neutral-600 text-sm font-medium p-2 rounded-lg leading-none h-fit">
              Tailwind
        </span>
</div>
        <h2 className='text-2xl mb-1'> {title} </h2>
        <p className='text-neutral-500 w-full lg:w-4/5 pb-4'> {description} </p>
    </div>
  )
}

export default ProjectReview
