import React from 'react'
import Image from 'next/image'

const product = [
  {
    "name": "Nike Airforce 1' 07",
    "price": 80,
    "rating": 56,
    "image": "/img/blacki.png"
  },
  {
    "name": "Nike Air Max 90",
    "price": 120,
    "rating": 56,
    "image": "/img/bluenike.png"
  },
  {
    "name": "Air Jordan 13 R.",
    "price": 125,
    "rating": 104,
    "image": "/img/rednike.png"
  },
  {
    "name": "Air Jordan Retro",
    "price": 115,
    "rating": 64,
    "image": "/img/red.png"
  },
  {
    "name": "Nike Free Metcon",
    "price": 120,
    "rating": 50,
    "image": "/img/bluenike.png"
  },
  {
    "name": "Nike Airforce 4",
    "price": 167,
    "rating": 32,
    "image": "/img/rednike.png"
  },
  {
    "name": "Nike Airforce 1' 07",
    "price": 80,
    "rating": 56,
    "image": "/img/blacknike.png"
  },
  {
    "name": "Nike Air Max 90",
    "price": 120,
    "rating": 56,
    "image": "/img/red.png"
  },
  {
    "name": "Air Jordan 13 R.",
    "price": 125,
    "rating": 104,
    "image": "/img/blacki.png"
  },
  {
    "name": "Air Jordan Retro",
    "price": 115,
    "rating": 64,
    "image": "/img/rednike.png"
  },
  {
    "name": "Nike Free Metcon",
    "price": 120,
    "rating": 50,
    "image": "/img/red.png"
  },
  {
    "name": "Nike Airforce 4",
    "price": 167,
    "rating": 32,
    "image": "/img/blacki.png"
  }
]








const sneakers = () => {
  return (
    <div>


<div className="min-h-screen  lg:px-[130px] px-5 py-14 font-space-grotesk">
        <h2 className="lg:text-[64px] text-[24px] font-medium mb-14 text-center ">Sneakers for you</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 ">
          {product.map((product, index) => (
            <div key={index} className="border border-gray-[#EDEEF2] rounded-lg flex flex-col">
              <div className="relative bg-[#EDEEF2] rounded-lg">
                <Image src={product.image} alt={product.name} width={500} height={500} className="object-cover rounded-t-lg" />
                <button className="absolute top-4 right-3 bg-white p-1 rounded-full border border-gray-[#EDEEF2]">
                  <Image src="/img/love.svg" alt="" width={40} height={40} />
                </button>
              </div>

              <div className="">
                <div className="mt-1 p-4 flex-1 flex justify-between bg-white rounded-lg">


                  <div className="flex flex-col">
                    <p className="lg:text-[26px] font-medium">{product.name}</p>
                    <div className="mt-2 flex justify-between">
                      <span className="text-[14px] lg:text-xl font-bold">${product.price}</span>
                      <span className="text-gray-500 text-sm flex items-center mr-6">
                        <Image src="/img/star.svg" width={70} height={70} alt="" />
                        ({product.rating})
                      </span>
                    </div>
                  </div>

                  <button>
                    <Image src="/img/blackcart.svg" width={40} height={40} alt=""  />
                  </button>


                </div>

              </div>
            </div>
          ))}
        </div>
      </div>




    </div>
  )
}

export default sneakers 