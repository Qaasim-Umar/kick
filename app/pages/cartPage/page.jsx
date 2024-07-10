import CartItem from '@/app/components/cartItem';
import OrderSummary from '@/app/components/orderSummary';
import Footer from '@/app/sections/footer';
import Navbar from '@/app/sections/navbar';

const products = [
  {
    name: 'Puma and Lamelo sneakers',
    image: '/img/bluenike.png',
    size: 'S',
    color: 'Color: Pink',
    quantity: 1,
    price: 500.00
  },
  {
    name: 'Nike Free Metcon',
    image: '/img/blacknike.png',
    size: 'S',
    color: 'Color: Red',
    quantity: 1,
    price: 120.00
  },
  {
    name: 'Air Jordan Retro',
    image: '/img/rednike.png',
    size: 'S',
    color: 'Color: Brown',
    quantity: 1,
    price: 115.00
  },
];

const CartPage = () => {
  const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto lg:p-20 p-4 ">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="w-full lg:w-2/3">
            <div className="hidden md:flex justify-between items-center pb-10 border-b-[#919191] border-b lg:mr-10 ">
              <h2 className="font-medium w-2/3 font-space-grotesk text-[32px]">Product</h2>
              <div className="flex w-1/3 justify-between">
                <h2 className="font-medium font-space-grotesk text-[32px]">Quantity</h2>
                <h2 className="font-medium font-space-grotesk text-[32px]">Price</h2>
              </div>
            </div>
            {products.map((product, index) => (
              <CartItem key={index} product={product} />
            ))}
          </div>
          <div className="w-full lg:w-1/3">
            <OrderSummary total={total} />
          </div>
        </div>


      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
