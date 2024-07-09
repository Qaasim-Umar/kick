
import Image from 'next/image'

const benefit = () => {
  return (
    <div className='bg-[#EDEEF2] lg:py-10 py-4 flex justify-center items-center'>



      <div className="flex bg-white rounded-[8px] lg:rounded-[16px] lg:p-[40px] lg:space-x-[160px] justify-around w-[90%] ">

        <div className="flex lg:justify-center items-center text-[#141311] p-2 ">
          <Image src="/img/cart.svg" alt="" width={10} height={10} className='lg:w-12 w-6 ' />
          <div className="flex-row">
            <p className='font-space-grotesk font-semibold lg:text-[22px] text-[12px]'>Free Delivery</p>
            <p className='lg:text-[14px] text-[10px]'>On every order over $100</p>
          </div>
        </div>


        <div className="flex justify-center items-center text-[#141311] space-x-2">
          <Image src="/img/support.svg" alt="" width={10} height={10} className='lg:w-12 w-6' />
          <div className="flex-row ">
            <p className='font-space-grotesk font-semibold lg:text-[22px] text-[12px]'>Online Support</p>
            <p className='lg:text-[14px] text-[10px]'>A 24hours customer</p>
          </div>
        </div>


<div className='lg:block   hidden'>
        <div className="flex justify-center items-center text-[#141311] space-x-2 ">
          <Image src="/img/health.svg" width={10} height={10} alt="" className='w-10' />
          <div className="flex-row ">
            <p className='font-space-grotesk font-semibold text-[22px]'>Discounted Sale</p>
            <p className='text-[14px]'>20% discount off sales above $250</p>
          </div>
        </div>
        </div>

      </div>









    </div>
  )
}

export default benefit