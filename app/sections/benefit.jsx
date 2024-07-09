import React from 'react'

const benefit = () => {
  return (
    <div className='bg-[#EDEEF2] h-[280px] flex justify-center items-center'>



      <div className="flex bg-white rounded-[16px] p-[40px] space-x-[210px] ">

        <div className="flex justify-center items-center text-[#141311] space-x-2">
          <img src="/img/cart.svg" alt="" className='w-12' />
          <div className="flex-row ">
            <p className='font-space-grotesk font-semibold text-[32px]'>Free Delivery</p>
            <p className=''>On every order over $100</p>
          </div>
        </div>


        <div className="flex justify-center items-center text-[#141311] space-x-2">
          <img src="/img/support.svg" alt="" className='w-12'/>
          <div className="flex-row ">
            <p className='font-space-grotesk font-semibold text-[32px]'>Online Support</p>
            <p className=''>A 24hours customer care</p>
          </div>
        </div>



        <div className="flex justify-center items-center text-[#141311] space-x-2">
          <img src="/img/health.svg" alt="" className='w-12' />
          <div className="flex-row ">
            <p className='font-space-grotesk font-semibold text-[32px]'>Discounted Sale</p>
            <p className=''>20% discount off sales above $250</p>
          </div>
        </div>

      </div>




    </div>
  )
}

export default benefit