'use client'
import { useState } from 'react';
import Image from 'next/image';

const CartItem = ({ product, onRemove, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onUpdateQuantity(product, newQuantity);
    }
  };

  return (
    <div className="flex justify-between items-center border-b-[#919191] border-b py-10 lg:mr-10">
      <div className="flex items-center space-x-4">
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={120}
          className="lg:w-[118px] lg:h-[140px] object-cover bg-[#EDEEF2]"
        />
        <div>
          <h2 className="font-semibold font-space-grotesk lg:text-[24px] text-[14px] text-[#141311]">
            {product.name}
          </h2>
          <p className="lg:text-[16px] text-[12px] text-[#4F4F4F]">
            Size: {product.size}, Color: {product.color}
          </p>
          <div className="flex items-center mt-2 space-x-2">
            <button
              className="text-[#C00000] lg:text-[20px] text-[12px] flex items-center gap-1 font-medium font-space-grotesk"
              onClick={() => onRemove(product)}
            >
              <Image src="/img/stop.svg" width={17} height={12} alt="" /> Remove
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center lg:space-x-[150px]">
        <div className="lg:py-2 lg:px-3 mr-2 inline-block bg-white border border-[#D9D9D9] lg:rounded-lg rounded-[4px] dark:border-neutral-700">
          <div className="flex items-center gap-x-1.5">
            <button
              className="p-0 w-6 sm:w-4 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <input
              className="p-0 w-6 sm:w-4 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
              type="text"
              value={quantity}
              readOnly
            />
            <button
              className="p-0 w-6 sm:w-4 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
        </div>
        <p className="font-semibold">${(product.price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
