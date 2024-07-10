import Image from "next/image";
import Link from "next/link";


const OrderSummary = ({ total }) => {
  return (
   
    <div>



      <div className="lg:border lg:p-5 rounded border-[#919191] mb-10">
        <h2 className="font-medium font-space-grotesk text-[36px] text-[#141311] lg:block hidden mb-4">Order Summary</h2>
        <div className="flex justify-between items-center mb-4">
          <span className="lg:font-medium font-semibold lg:text-[28px] ">Sub Total</span>
          <span className="font-semibold lg:text-[36px] text-[20px]">${total.toFixed(2)}</span>
        </div>
        <Link href="/pages/checkout">
        <button className="bg-[#141311] text-white mt-[20px] w-full lg:py-2 py-3 rounded font-medium lg:text-[24px]">Checkout now</button>
</Link>
      </div>


      <div className="border p-4 rounded border-[#919191] hidden lg:block">
        <div className="mt-4">
          <h3 className="font-medium text-[36px]  my-5 font-space-grotesk">We accept</h3>
          <div className="flex flex-wrap space-x-2">
            <Image src="/img/master.png" width={320} height={120}  alt="Visa" className="" />

            {/* Add more payment methods as needed */}
          </div>
        </div>
      </div>


    </div>
  );
};

export default OrderSummary;
