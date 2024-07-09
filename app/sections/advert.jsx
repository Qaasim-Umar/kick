import React from 'react'
import Image from 'next/image'

const advert = () => {
  return (
    <div className='p-[50px] bg-[#EDEEF2] my-[170px]  relative '>


      <div className="flex ">
        <div className="w-1/2 flex items-center justify-center">
          {/* Left half content  */}
          <div className=' flex-row space-y-5'>
            <h1 className='text-[48px] leading-[61px] font-semibold font-space-grotesk'>Take advantage of the ongoing &apos;Buy one Get One free&apos;</h1>

            <p className='text-[20px] leading-[36px]'>Don't miss out on our incredible &apos;Buy One, Get One Free&apos; offer! Double your style and savings with this limited-time deal</p>

            <p className='bg-[#141311] text-white px-[16px] py-[24px] rounded-[12px] w-[190px] flex justify-center'> View all</p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          {/* Right half content */}
          <Image src="/img/black.png" width={100} height={100}  alt="shoe" className=' absolute' />

        </div>
      </div>






    </div>
  )
}

export default advert