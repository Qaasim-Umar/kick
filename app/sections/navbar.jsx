'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 border-b shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Kick</div>
        <div className="hidden md:flex items-center space-x-4">
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
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded-md"
          />
          <Link href="#" legacyBehavior>
            <a className="hover:underline">Favourites</a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="hover:underline">Cart</a>
          </Link>
          <Link href="#" legacyBehavior>
            <a className="hover:underline">Account</a>
          </Link>
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <div className="flex flex-col space-y-2">
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
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 border rounded-md"
            />
            <Link href="#" legacyBehavior>
              <a className="hover:underline">Favourites</a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="hover:underline">Cart</a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="hover:underline">Account</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
