'use client'
import { useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <div className="bg-[#141311] text-white py-5">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:p-20 p-5 font-space-grotesk min-h-[378px] justify-center align-text-top">
        <div className="lg:block hidden">
          <div className="flex pl-7 items-start">
            <Image src="/img/logowhite.svg" alt="" width={120} height={120} />
          </div>
        </div>
        <div className="space-y-4 ">
          <div
            className="flex items-center justify-between font-medium text-2xl cursor-pointer"
            onClick={() => toggleSection('shop')}
          >
            <h1>Shop</h1>
            <div className='block lg:hidden'>
            <svg
              className={`w-5 h-5 transform transition-transform ${openSection === 'shop' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            </div>
          </div>
          <div className={`${openSection === 'shop' ? 'block' : 'hidden'} lg:block space-y-2`}>
            <p>Women</p>
            <p>Men</p>
            <p>Kids</p>
          </div>
        </div>
        <div className="space-y-4">
          <div
            className="flex items-center justify-between font-medium text-2xl cursor-pointer"
            onClick={() => toggleSection('information')}
          >
            <h1>Information</h1>
            <div className='block lg:hidden'>
            <svg
              className={`w-5 h-5 transform transition-transform ${openSection === 'information' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            </div>
          </div>
          <div className={`${openSection === 'information' ? 'block' : 'hidden'} lg:block space-y-2`}>
            <p>Delivery information</p>
            <p>Privacy and policy</p>
            <p>Terms of service</p>
          </div>
        </div>
        <div className="space-y-4 border-b lg:border-b-[#000000]  border-b-[#FFFFFF]">
          <div
            className="flex items-center justify-between font-medium text-2xl cursor-pointer"
            onClick={() => toggleSection('company')}
          >
            <h1>Company</h1>
            <div className='block lg:hidden'>
            <svg
              className={`w-5 h-5 transform transition-transform ${openSection === 'company' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            </div>
          </div>
          <div className={`${openSection === 'company' ? 'block' : 'hidden'} lg:block space-y-2`}>
            <p>About us</p>
            <p>Stores</p>
            <p>Refund policy</p>
            <p>Help and advice</p>
          </div>
        </div>


<div className='block lg:hidden mx-auto pt-4'>
<Image src="/img/socialsmobile.png" width={400} height={400} alt="" />
</div>


        <div className="space-y-4 lg:block hidden">
          <div
            className="flex items-center justify-between font-medium text-2xl cursor-pointer"
            onClick={() => toggleSection('contact')}
          >
            <h1>Contact Us</h1>
            <div className='block lg:hidden'>
            <svg
              className={`w-5 h-5 transform transition-transform ${openSection === 'contact' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            </div>
          </div>
          <div className={`${openSection === 'contact' ? 'block' : 'hidden'} lg:block space-y-2`}>
            <p>Kicks@gmail.com</p>
            <p>+227 76845638</p>
            <p>Terms of service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
