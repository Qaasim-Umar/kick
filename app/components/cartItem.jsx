import Image from "next/image";


const CartItem = ({ product }) => {
  return (
    <div className="flex justify-between items-center border-b-[#919191] border-b py-10 lg:mr-10">
      <div className="flex items-center space-x-4">
        <Image src={product.image} alt={product.name} width={100} height={120} className="lg:w-[118px] lg:h-[140px] object-cover bg-[#EDEEF2]" />
        <div>
          <h2 className="font-semibold font-space-grotesk lg:text-[24px] text-[14px] text-[#141311]">{product.name}</h2>
          <p className="lg:text-[16px] text-[12px] text-[#4F4F4F]">Size: {product.size}, Color: {product.color}</p>
          <button className="text-[#C00000] lg:text-[20px] text-[12px] mt-2 flex items-center gap-2 font-medium font-space-grotesk">  <Image src="/img/stop.svg" width={17} height={12}  alt="" />Remove</button>
        </div>
      </div>
      <div className="flex items-center lg:space-x-[150px]">




      <div class=" lg:py-2 lg:px-3  mr-2 inline-block bg-white border border-[#D9D9D9] lg:rounded-lg rounded-[4px] dark:border-neutral-700" data-hs-input-number="">
  <div class="flex items-center gap-x-1.5">
   <Image src="" width={10} height={10} alt="" />
    <input class="p-0 w-6 sm:w-4 bg-transparent border-0 text-gray-800 text-center focus:ring-0" type="text" value={product.quantity} data-hs-input-number-input="" />
   <Image src="" width={10} height={10} alt="" />
  </div>
</div>





        <p className="font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
