import React from 'react'

const collection = () => {
  return (
    <div className='p-16'>


<header>
<h1 className=' font-space-grotesk font-medium text-[64px] text-center'> Explore Our New Collection</h1>
<p className='text-[26px]'>Discover our latest arrivals featuring the freshest designs and cutting-edge styles. Elevate your sneaker game with our new collection, crafted for comfort and built for performance</p>

</header>
    


<div className="min-h-screen p-6 font-space-grotesk">
      <div className="grid grid-cols-2 gap-6 h-screen">
        <div className="grid grid-rows-3 gap-6">
          <div className="row-span-2 bg-[#EDEEF2] p-4 flex flex-col items-center justify-center">
            <img src="/img/colored.png" alt="Product 1" className="object-cover w-[400px]" />
            <button className="mt-auto bg-gray-800 text-white py-2 px-4 rounded-full flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-1.68 12.64A2 2 0 0117.34 18H6.66a2 2 0 01-1.98-2.36L3 3zm0 0l2 12h14l2-12M5 21h14M9 17v4m6-4v4" />
              </svg>
              Add to cart
            </button>
          </div>
          <div className="bg-[#B8AEA7] p-4 flex flex-col items-center justify-center">
            <img src="/img/white.png" alt="Product 2" className="object-cover w-[350px]" />
            <button className="mt-auto bg-gray-800 text-white py-2 px-4 rounded-full flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-1.68 12.64A2 2 0 0117.34 18H6.66a2 2 0 01-1.98-2.36L3 3zm0 0l2 12h14l2-12M5 21h14M9 17v4m6-4v4" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-6">
          <div className="bg-[#DCCDC3] p-4  flex flex-col items-center justify-center">
            <img src="/img/orange.png" alt="Product 3" className="object-cover w-[380px]" />
            <button className="mt-auto bg-gray-800 text-white py-2 px-4 rounded-full flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-1.68 12.64A2 2 0 0117.34 18H6.66a2 2 0 01-1.98-2.36L3 3zm0 0l2 12h14l2-12M5 21h14M9 17v4m6-4v4" />
              </svg>
              Add to cart
            </button>
          </div>
          <div className="bg-[#D6D7DB] p-4  flex flex-col items-center justify-center">
            <img src="/img/whiteandblack.png" alt="Product 4" className="object-cover w-[380px]" />
            <button className="mt-auto bg-gray-800 text-white py-2 px-4 rounded-full flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18l-1.68 12.64A2 2 0 0117.34 18H6.66a2 2 0 01-1.98-2.36L3 3zm0 0l2 12h14l2-12M5 21h14M9 17v4m6-4v4" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>





        
    </div>
  )
}

export default collection