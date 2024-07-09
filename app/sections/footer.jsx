import React from 'react'
import Image from 'next/image'

const footer = () => {
  return (
    <div className="bg-[#141311] text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-20 min-h-[378px] justify-center align-text-top">
        <div className="flex pl-7 items-start">
          <Image src="/img/logowhite.svg" alt="" width={120} height={120} />
        </div>
        <div className="space-y-4">
          <p className="font-medium text-2xl">Shop</p>
          <p>Women</p>
          <p>Men</p>
          <p>Kids</p>
        </div>
        <div className="space-y-4">
          <p className="font-medium text-2xl">Information</p>
          <p>Delivery information</p>
          <p>Privacy and policy</p>
          <p>Terms of service</p>
        </div>
        <div className="space-y-4">
          <p className="font-medium text-2xl">Company</p>
          <p>About us</p>
          <p>Stores</p>
          <p>Refund policy</p>
          <p>Help and advice</p>
        </div>
        <div className="space-y-4">
          <p className="font-medium text-2xl">Contact Us</p>
          <p>Kicks@gmail.com</p>
          <p>+227 76845638</p>
          <p>Terms of service</p>
        </div>
      </div>
    </div>

  )
}

export default footer