import Image from "next/image";

const OrderSummary = ({ total }) => {
  return (
    <div>



      <div className="border p-5 rounded border-[#919191] mb-10">
        <h2 className="font-medium font-space-grotesk text-[36px] text-[#141311] mb-4">Order Summary</h2>
        <div className="flex justify-between items-center mb-4">
          <span className="font-medium text-[28px] ">Sub Total</span>
          <span className="font-semibold text-[36px]">${total.toFixed(2)}</span>
        </div>
        <button className="bg-[#141311] text-white w-full py-2 rounded font-medium text-[24px]">Checkout now</button>

      </div>


      <div className="border p-4 rounded border-[#919191]">
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
