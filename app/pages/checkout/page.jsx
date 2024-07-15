'use client'

import { useEffect, useState } from 'react';
import Navbar from '@/app/sections/navbar';
import Footer from '@/app/sections/footer';
import Image from 'next/image';

const CheckoutPage = () => {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('cartProducts');
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    localStorage.removeItem('cartProducts'); // Optionally clear localStorage after checkout
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className=" lg:p-20 p-5 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="  ">

            <div className="border border-[#919191] rounded-[12px] p-5">

              <h2 className="text-[#141311] lg:text-[36px] text-[24px] font-medium font-space-grotesk mb-4">Review product</h2>
              <div className="mb-4">
                {products.map((product, index) => (
                  <div key={index} className="flex justify-between items-center mb-2  ">
                    <div className="flex items-center">
                      <Image src={product.image} alt={product.name} width={100} height={100} className="w-12 h-12 mr-2 bg-[#EDEEF2]" />
                      <div>
                        <h3 className="font-semibold text-[#141311] font-space-grotesk lg:text-[24px]">{product.name}</h3>
                        <p className="text-[#4F4F4F]">Size: {product.size}, Colour: {product.color}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <p className="text-[#141311] text-[20px] font-medium">${(product.price * product.quantity).toFixed(2)}</p>
                      <p className="text-[#141311] text-[12px]">Quantity: {product.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center my-10">
              <input type="checkbox" id="returning-customer" className="mr-2" />
              <label htmlFor="returning-customer">Returning customer?</label>
            </div>
            <div className="border border-[#919191] rounded-[12px] ">

              <div className="flex items-center justify-between p-5">
                <p className="lg:text-[36px] text-[24px] text-[#141311] font-medium font-space-grotesk pt-7 ">Delivery details</p>
                <button className="mt-4 lg:p-2 p-1 border border-[#141311] font-space-grotesk font-medium rounded-[12px]">Save details</button>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">

                <div>
                  <p className="font-space-grotesk font-medium text-[20px] text-[#141311]">First name*</p>
                  <input type="text" placeholder="Enter here" className="p-2 w-full md:w-[90%] border border-[#B7B7B7] rounded" />
                </div>

                <div className="md:ml-5">
                  <p className="font-space-grotesk font-medium text-[20px] text-[#141311]">Last name*</p>
                  <input type="text" placeholder="Enter here" className="p-2 w-full md:w-[90%] border border-[#B7B7B7] rounded" />
                </div>

                <div className="col-span-1 md:col-span-2">
                  <p className="font-space-grotesk font-medium text-[20px] text-[#141311]">Address*</p>
                  <input type="text" placeholder="Enter here" className="p-2 w-full border border-[#B7B7B7] rounded" />
                </div>

                <div>
                  <p className="font-space-grotesk font-medium text-[20px] text-[#141311]">City*</p>
                  <input type="text" placeholder="Enter here" className="p-2 w-full md:w-[90%] border border-[#B7B7B7] rounded" />
                </div>

                <div className="md:ml-5">
                  <p className="font-space-grotesk font-medium text-[20px] text-[#141311]">Country*</p>
                  <input type="text" placeholder="Enter here" className="p-2 w-full md:w-[90%] border border-[#B7B7B7] rounded" />
                </div>

                <div>
                  <p className="font-space-grotesk font-medium text-[20px] text-[#141311]">Email address*</p>
                  <input type="email" placeholder="Enter here" className="p-2 w-full md:w-[90%] border border-[#B7B7B7] rounded" />
                </div>

                <div className="md:ml-5">
                  <p className="font-space-grotesk font-medium text-[20px] text-[#141311]">Phone number*</p>
                  <input type="tel" placeholder="Enter here" className="p-2 w-full md:w-[90%] border border-[#B7B7B7] rounded" />
                </div>

              </form>


            </div>
          </div>
          <div>
            <div className=" border border-[#919191] p-5 rounded-[12px]">
              <h2 className="text-2xl font-medium font-space-grotesk mb-4">Payment details</h2>
              <form className="space-y-4">
                <div>
                  <p className="block mb-2">Payment method</p>
                  <div className="flex flex-col space-y-2">
                    <p className="flex items-center">
                      <input type="radio" name="payment-method" className="mr-2" /> Paypal
                    </p>
                    <p className="flex items-center">
                      <input type="radio" name="payment-method" className="mr-2" /> Google/Apple pay
                    </p>
                    <p className="flex items-center">
                      <input type="radio" name="payment-method" className="mr-2" /> American express
                    </p>
                    <p className="flex items-center">
                      <input type="radio" name="payment-method" className="mr-2" /> Venmo
                    </p>
                    <p className="flex items-center">
                      <input type="radio" name="payment-method" className="mr-2" /> Discover
                    </p>
                    <p className="flex items-center">
                      <input type="radio" name="payment-method" className="mr-2" /> Maestro
                    </p>
                    <p className="flex items-center">
                      <input type="radio" name="payment-method" className="mr-2" /> After pay
                    </p>
                    <p className="flex items-center">
                      <input type="radio" name="payment-method" className="mr-2" /> Debit or Credit card
                    </p>
                  </div>
                </div>
                <Image src="/img/3visa.png" alt="" width={340} height={100} />
                <div>
                  <p className="block  mb-1 text-[20px] font-medium font-space-grotesk text-[#141311]">Email address*</p>
                  <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <p className="block mb-1 text-[20px] font-medium font-space-grotesk text-[#141311]">Card number*</p>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <p className="block mb-1 text-[20px] font-medium font-space-grotesk text-[#141311]">Card holder&apos;s number*</p>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <p className="block mb-1 text-[20px] font-medium font-space-grotesk text-[#141311]">Expiry date*</p>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div className="flex-1">
                    <p className="block mb-1 text-[20px] font-medium font-space-grotesk text-[#141311]">CVS*</p>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                </div>

              </form>
            </div>

            <div className=" border border-[#919191] mt-20 p-5 rounded-[12px]">
              <h2 className="text-[24px] font-medium my-8 mb-4 font-space-grotesk">Order summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>${(products.reduce((acc, product) => acc + product.price * product.quantity, 0)).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax(15%)</span>
                  <span>${((products.reduce((acc, product) => acc + product.price * product.quantity, 0)) * 0.15).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery fee</span>
                  <span>$53.00</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${(((products.reduce((acc, product) => acc + product.price * product.quantity, 0)) * 0.15) + (products.reduce((acc, product) => acc + product.price * product.quantity, 0)) + 53.00).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex gap-2 ">
                <input type="text" placeholder="Add coupon code here" className="w-full p-2 border border-[#B7B7B7] rounded mt-4" />
                <button className="mt-4 w-[80px] p-2 border border-[#141311] rounded-[4px]">Apply</button>
              </div>

              <button className="mt-4 w-full p-2 bg-[#141311] text-white rounded">Pay ${(products.reduce((acc, product) => acc + product.price * product.quantity, 0)).toFixed(2)}</button>
              <p className="mt-4 text-sm text-center hidden lg:block">
                By proceeding, you are automatically accepting the <a href="#" className="text-[#032FA7]">Terms & Conditions</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
