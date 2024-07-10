import React from 'react'
import Image from 'next/image'

const advert = () => {
  return (
    <div className='lg:p-[45px] p-4 bg-[#EDEEF2] lg:my-[110px] mt-5  relative '>


      <div className="flex ">
        <div className="w-1/2 flex items-center justify-center">
          {/* Left half content  */}
          <div className=' flex-row lg:space-y-3  space-y-2'>
            <h1 className='lg:text-[48px] lg:leading-[51px]  font-semibold font-space-grotesk'>Take advantage of the ongoing &apos;Buy one Get One free&apos;</h1>

            <p className='lg:text-[20px] text-[10px] lg:leading-[36px]'>Don&apos;t miss out on our incredible &apos;Buy One, Get One Free&apos; offer! Double your style and savings with this limited-time deal</p>

            <p className='bg-[#141311] text-[10px] lg:text-[16px] text-white lg:px-[8px] lg:py-[18px] py-1 w-20 rounded-[4px] lg:w-[150px] flex justify-center'> View all</p>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          {/* Right half content */}
          <Image src="/img/black.png" width={600} height={600}  alt="shoe" className=' absolute lg:w-[600px] w-[170px]' />

        </div>
      </div>






    </div>
  )
}

export default advert