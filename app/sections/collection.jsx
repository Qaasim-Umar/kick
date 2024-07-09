import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const collection = () => {
  return (
    <div>

      <div className='lg:p-16 p-5'>


        <header>
          <h1 className=' font-space-grotesk font-medium lg:text-[64px] text-[24px] text-center'> Explore Our New Collection</h1>
          <p className='lg:text-[26px] w-[90%] text-center mx-auto'>Discover our latest arrivals featuring the freshest designs and cutting-edge styles. Elevate your sneaker game with our new collection, crafted for comfort and built for performance</p>

        </header>

        <div className="container">




          <div className=" p-1 font-space-grotesk">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="grid grid-rows-3 gap-6">
                <div className="row-span-2 bg-[#EDEEF2] p-4 flex flex-col items-center justify-center">
                  <Image src="/img/colored.png" width={100} height={100} alt="Product 1" className="object-cover w-[400px]" />
                  <button className="mt-auto bg-white text-black py-2 px-4 rounded-full flex items-center">
                    <Image src="/img/blackcart.svg" width={20} height={20} alt="" className='pr-1' />
                    Add to cart
                  </button>
                </div>
                <div className="bg-[#B8AEA7] p-4 flex flex-col items-center justify-center">
                  <Image src="/img/white.png" width={100} height={100} alt="Product 2" className="object-cover w-[350px]" />
                  <button className="mt-auto bg-white text-black py-2 px-4 rounded-full flex items-center">
                    <Image src="/img/blackcart.svg" width={20} height={20} alt="" className='pr-1' />
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="grid grid-rows-2 gap-6">
                <div className="bg-[#DCCDC3] p-4 flex flex-col items-center justify-center">
                  <Image src="/img/orange.png" width={100} height={100} alt="Product 3" className="object-cover w-[380px]" />
                  <button className="mt-auto bg-white text-black py-2 px-4 rounded-full flex items-center">
                    <Image src="/img/blackcart.svg" width={20} height={20} alt="" className='pr-1' />
                    Add to cart
                  </button>
                </div>
                <div className="bg-[#D6D7DB] p-4 flex flex-col items-center justify-center">
                  <Image src="/img/whiteandblack.png" width={100} height={100} alt="Product 4" className="object-cover w-[380px]" />
<Link href="/pages/cartPage">
                  <button className="mt-auto bg-white text-black py-2 px-4 rounded-full flex items-center">
                    <Image src="/img/blackcart.svg" width={20} height={20} alt="" className='pr-1' />
                    Add to cart
                  </button>
                  </Link>
                </div>

              </div>

            </div>

          </div>


        </div>


      </div>

      <div className="hidden lg:block">
        <div className='flex justify-center'>
          <Image src="img/numbers.svg" width={200} height={200} alt="" />
        </div>
      </div>

<div className="block lg:hidden">
  <div className="flex justify-center ">
      <p className= ' bg-[#141311] text-white px-[14px] py-[16px] rounded-[4px]  w-[143px] flex justify-center font-space-grotesk font-medium'> View more</p>
      </div>
      </div>
    </div>
  )
}

export default collection