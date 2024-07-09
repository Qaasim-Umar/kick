import React from 'react'

const hero = () => {
  return (
    <div className='px-28'>



<div className="flex h-screen">
  <div className="w-1/2 flex items-center justify-center pr-7">
    {/* Left half content  */}
<div className=' flex-row space-y-8'>
<h1 className='text-[86px] leading-[98px] font-semibold font-space-grotesk'>Discover <br />
your perfect <span className='text-[#BA9B88]'>sneakers</span> here </h1>

<p className='text-[28px] leading-[36px]'>Explore the latest trends and timeless classics in sneakers, all in one place: from casual kicks to high-performance athletic shoes. We've got your feet covered</p>

<p className='bg-[#141311] text-white px-[16px] py-[24px] rounded-[12px] w-[190px] flex justify-center font-space-grotesk font-medium text-[24px]'> Explore now</p>
</div>
  </div>
  <div className="w-1/2 flex items-center justify-center">
    {/* Right half content */}
    <img src="/img/shoe.png" alt="shoe" />

  </div>
</div>






    </div>
  )
}

export default hero