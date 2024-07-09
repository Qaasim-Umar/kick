
import Image from 'next/image'

const hero = () => {
  return (
    <div className='lg:px-24 px-5'>
      <div className="flex lg:h-screen flex-col lg:flex-row">
        <div className="lg:w-1/2 flex items-center justify-center">
          {/* Left half content  */}
          <div className=' flex-row space-y-6'>
            <p className='lg:text-[76px] text-[36px] lg:leading-[78px] leading-[45px] font-semibold font-space-grotesk'>Discover <br/> your perfect <span className='text-[#BA9B88]'>sneakers</span> here </p>

            <p className='lg:text-[22px] text-[20px] leading-[36px] lg:leading-[28px]'>Explore the latest trends and timeless classics in sneakers, all in one place: from casual kicks to high-performance athletic shoes. We&apos;ve got your feet covered</p>

            <p className='bg-[#141311] text-white px-[14px] py-[16px] rounded-[4px] lg:w-[190px] w-[143px] flex justify-center font-space-grotesk font-medium lg:text-[24px]'> Explore now</p>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          {/* Right half content */}
          <Image src="/img/shoe.png" width={600} height={600} alt="shoe" />

        </div>
      </div>






    </div>
  )
}

export default hero