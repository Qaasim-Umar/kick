'use client'
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 mb-4">
      <div className="flex items-center">
      <div className="container mx-auto flex items-center lg:justify-between ">
        <button
          className="md:hidden flex items-center px-3 py-2  rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current h-8 w-8 mt-2"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div className="lg:flex lg:gap-10">
          <div className="text-2xl font-bold lg:pl-10 lg:-mt-2">
            <Image src="/img/logo.svg" width={80} height={80} alt="" />
          </div>
          <div className="hidden md:flex items-center lg:space-x-6 space-x-4 font-space-grotesk font-medium">
            <Link href="#" legacyBehavior>
              <a className="hover:underline">Collections</a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="hover:underline">Sales</a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="hover:underline">Delivery</a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="hover:underline">Why us</a>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4 font-space-grotesk font-medium">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1 bg-[#EDEEF2] border rounded-[24px]"
          />
          <Link href="#" legacyBehavior>
            <div className="flex gap-1">
              <Image src="/img/love2.svg" width={20} height={20} alt="" />
              <a className="hover:underline">Favourites</a>
            </div>
          </Link>
          <Link href="/pages/cartPage" legacyBehavior>
            <div className="flex gap-1 hover:underline">
              <Image src="/img/cart.svg" width={20} height={20} alt="" />
              <a className="">Cart</a>
            </div>
          </Link>
          <Link href="#" legacyBehavior>
            <div className="flex gap-1">
              <Image src="/img/user.svg" width={20} height={20} alt="" />
              <a className="hover:underline">Account</a>
            </div>
          </Link>
        </div>
      </div>







      <div className="lg:hidden flex gap-4 mr-[65px] ">
        <Link href="#" legacyBehavior>
          <Image src="/img/searchplain.svg"  width={20} height={20} alt="" />
        </Link>
        <Link href="#" legacyBehavior>
        <Image src="/img/love2.svg"  width={20} height={20} alt="" />
        </Link>
        <Link href="/pages/cartPage" legacyBehavior>
        <Image src="/img/cart.svg"  width={20} height={20} alt="" />
        </Link>
        <Link href="#" legacyBehavior>
        <Image src="/img/user.svg"  width={20} height={20} alt="" />
        </Link>
      </div>

      </div>



      {isOpen && (
        <div className="md:hidden mt-2 mb-4">
          <div className="flex flex-col space-y-3 font-space-grotesk font-medium">
            <Link href="#" legacyBehavior>
              <a className="hover:underline  text-[24px]">Collections</a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="hover:underline  text-[24px]">Sales</a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="hover:underline  text-[24px]">Delivery</a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="hover:underline  text-[24px]">Why us</a>
            </Link>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-1  bg-[#EDEEF2] border rounded-[24px]"
            />

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
