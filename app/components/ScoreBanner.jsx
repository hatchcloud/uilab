import React from 'react'
import { Plus } from 'lucide-react';
import Level from '@/public/vectors/level.svg'
import Image from 'next/image';


const reviews = [
    {
      score: 10,
      color: "orange",
      text: "They bring a very different and creative perspective to tackling problems and identifying opportunities!",
    },
    {
      score: 8,
      color: "blue",
      text: "Great job! They consistently meet expectations and deliver high-quality work.",
    },
    {
      score: 6,
      color: "yellow",
      text: "They have room for improvement in some areas, but overall, they are doing fine.",
    },
    {
      score: 4,
      color: "red-700",
      text: "There are significant areas where improvement is needed to meet expectations.",
    },
  ];
  
  const ReviewsList = () => {
    return (
      <div className='flex items-center justify-center'>
        {reviews.map((review, index) => (
          <div key={index} className="flex items-center space-x-4 ml-4">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full bg-${review.color}-500 text-white font-bold`}
            >
              {review.score}
            </div>
            <p className=" text-nowrap text-gray-300">{review.text}</p>
          </div>
        ))}
      </div>
    );
  };

const ScoreBanner = () => {
  return (
    <div className='border flex rounded-full p-1 bg-zinc-800 border-zinc-900 gap-2'>

      <span className='bg-zinc-900 flex gap-1 text-white rounded-full h-12 px-5 py-3'> NPS 
        <Image src={Level} width={18} height={18} />
      </span>

      {/* Container */}
      <div className='min-w-40  w-96 overflow-hidden flex items-center '>
        <ReviewsList />
      </div>
      {/* Button */}
      <button className="group relative overflow-hidden overflow-x-hidden rounded-full bg-neutral-950 px-5 py-3 text-neutral-50"><span className="relative flex gap-1 items-center z-10 group-hover:text-zinc-900">See all
      <Plus  size={16} />
      </span><span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#E1FE03] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
    </div>
  )
}

export default ScoreBanner
