const CartItem = ({ product }) => {
    return (
      <div className="flex justify-between items-center border-b-[#919191] border-b py-10 lg:mr-10">
        <div className="flex items-center space-x-4">
          <img src={product.image} alt={product.name} className="w-[118px] h-[140px] object-cover bg-[#EDEEF2]" />
          <div>
            <h2 className="font-semibold font-space-grotesk text-[24px] text-[#141311]">{product.name}</h2>
            <p className="text-[16px]  text-[#4F4F4F]">Size: {product.size}, Color: {product.color}</p>
            <button className="text-[#C00000] text-[20px] mt-2 flex items-center gap-2 font-medium font-space-grotesk">  <img src="/img/stop.svg" alt="" />Remove</button>
          </div>
        </div>
        <div className="flex items-center lg:space-x-[150px]">
         



          <div class="py-2 px-3 inline-block bg-white border border-[#D9D9D9] rounded-lg  dark:border-neutral-700" data-hs-input-number="">
  <div class="flex items-center gap-x-1.5">    
      <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
      </svg>
    <input class="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 " type="text" value={product.quantity} data-hs-input-number-input=""/>
      <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
  </div>
</div>





          <p className="font-semibold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default CartItem;
  