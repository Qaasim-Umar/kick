import Image from "next/image";
import Footer from "@/app/sections/footer";


export default function Checkout() {
  return (
    <div className="">
      <div className=" p-20 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="  ">

            <div className="border border-[#919191] p-5">

              <h2 className="text-[#141311] text-[36px] font-medium font-space-grotesk mb-4">Review product</h2>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2  ">
                  <div className="flex items-center">
                    <Image src="/img/shoe.png" alt="Puma and Lamelo sneakers" width={100} height={100} className="w-12 h-12 mr-2 bg-[#EDEEF2]" />
                    <div>
                      <h3 className="font-semibold text-[#141311] font-space-grotesk text-[24px]">Puma and Lamelo sneakers</h3>
                      <p className="text-[#4F4F4F]">Size: 45, Colour: Pink</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <p className="text-[#141311] text-[20px] font-medium">$500.00</p>
                    <p className="text-[#141311]">Quantity: 02</p>
                  </div>

                </div>
                <div className="flex justify-between items-center mb-2 ">
                  <div className="flex items-center">
                    <Image src="/img/shoe.png" alt="Nike Free Metcon" width={100} height={100} className="w-12 h-12 mr-2 bg-[#EDEEF2]" />
                    <div>
                      <h3 className="font-semibold text-[#141311] font-space-grotesk text-[24px]">Nike Free Metcon</h3>
                      <p className="text-[#4F4F4F]">Size: 40, Colour: Pink</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <p className="text-[#141311] text-[20px] font-medium">$120.00</p>
                    <p className="text-[#141311]">Quantity: 01</p>
                  </div>

                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Image src="/img/shoe.png" alt="Air Jordan Retro" width={100} height={100} className="w-12 h-12 mr-2 bg-[#EDEEF2]" />
                    <div>
                      <h3 className="font-semibold text-[#141311] font-space-grotesk text-[24px]">Air Jordan Retro</h3>
                      <p className="text-[#4F4F4F]">Size: 45, Colour: Pink</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <p className="text-[#141311] text-[20px] font-medium">$115.00</p>
                    <p className="text-[#141311]">Quantity: 02</p>
                  </div>

                </div>
              </div>
            </div>
            <div className="flex items-center my-10">
              <input type="checkbox" id="returning-customer" className="mr-2" />
              <label htmlFor="returning-customer">Returning customer?</label>
            </div>
            <div className="border border-[#919191] rounded-[12px] ">

              <div className="flex items-center justify-between p-5">
                <p className="text-[36px] text-[#141311] font-medium font-space-grotesk pt-7 ">Delivery details</p>
                <button className="mt-4 p-2 border border-[#141311] font-space-grotesk font-medium rounded-[12px]">Save details</button>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 ">

                <div>
                  <p htmlFor="" className="font-space-grotesk font-medium text-[20px]  text-[#141311]">First name*</p>
                  <input type="text" placeholder="Enter here" className="p-2 w-[90%] border border-[#B7B7B7] rounded" />
                </div>


                <div className="ml-5">
                  <p htmlFor="" className="font-space-grotesk font-medium text-[20px]  text-[#141311]">Last name*</p>
                  <input type="text" placeholder="Enter here" className="p-2 border border-[#B7B7B7]  w-[90%]  rounded" />
                </div>

                <div className="col-span-2">
                  <p htmlFor="" className="font-space-grotesk font-medium text-[20px]  text-[#141311]">Address*</p>
                  <input type="text" placeholder="Enter here" className="p-2 w-full border-[#B7B7B7]  border rounded " />
                </div>

                <div>
                  <p htmlFor="" className="font-space-grotesk font-medium text-[20px]  text-[#141311]">City*</p>
                  <input type="text" placeholder="Enter here" className="p-2 w-[90%] border-[#B7B7B7]  border rounded" />
                </div>

                <div className="ml-5">
                  <p htmlFor="" className="font-space-grotesk font-medium text-[20px]  text-[#141311]">Country*</p>
                  <input type="text" placeholder="Enter here" className="p-2 w-[90%] border-[#B7B7B7]  border rounded" />
                </div>

                <div>
                  <p htmlFor="" className="font-space-grotesk font-medium text-[20px]  text-[#141311]">Email address*</p>
                  <input type="email" placeholder="Enter here" className="p-2 w-[90%] border-[#B7B7B7]  border rounded" />
                </div>

                <div className="ml-5">
                  <p htmlFor="" className="font-space-grotesk font-medium text-[20px]  text-[#141311]">Phone number*</p>
                  <input type="tel" placeholder="Enter here" className="p-2 w-[90%] border-[#B7B7B7]   border rounded" />
                </div>

              </form>

            </div>
          </div>
          <div>
            <div className=" border border-[#919191] p-5 rounded-[12px]">
              <h2 className="text-2xl font-semibold mb-4">Payment details</h2>
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
                <div>
                  <p className="block mb-2">Email address*</p>
                  <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <p className="block mb-2">Card number*</p>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <p className="block mb-2">Card holder's number*</p>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <p className="block mb-2">Expiry date*</p>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div className="flex-1">
                    <p className="block mb-2">CVS*</p>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                </div>

              </form>
            </div>

            <div className=" border border-[#919191] p-5 rounded-[12px]">
              <h2 className="text-2xl font-semibold mt-8 mb-4">Order summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sub Total</span>
                  <span>$855.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax(15%)</span>
                  <span>$32.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery fee</span>
                  <span>$53.00</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>$940.00</span>
                </div>
              </div>
              <input type="text" placeholder="Add coupon code here" className="w-full p-2 border rounded mt-4" />
              <button className="mt-4 w-full p-2 bg-blue-500 text-white rounded">Apply</button>
              <button className="mt-4 w-full p-2 bg-green-500 text-white rounded">Pay $800.00</button>
              <p className="mt-4 text-sm text-center">
                By proceeding, you are automatically accepting the <a href="#" className="text-blue-500">Terms & Conditions</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
