'use client'
import { useEffect, useState } from 'react';
import CartItem from '@/app/components/cartItem';
import OrderSummary from '@/app/components/orderSummary';
import Footer from '@/app/sections/footer';
import Navbar from '@/app/sections/navbar';
import Swipe from '@/app/sections/swipe';

const CartPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Check if window object (client-side) is available
    if (typeof window !== 'undefined') {
      const storedProducts = localStorage.getItem('cartProducts');
      setProducts(storedProducts ? JSON.parse(storedProducts) : [
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
      ]);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartProducts', JSON.stringify(products));
    }
  }, [products]);

  const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handleRemove = (productToRemove) => {
    const updatedProducts = products.filter(product => product !== productToRemove);
    setProducts(updatedProducts);
  };

  const handleUpdateQuantity = (productToUpdate, newQuantity) => {
    const updatedProducts = products.map(product =>
      product === productToUpdate ? { ...product, quantity: newQuantity } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto lg:p-20 p-4">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="w-full lg:w-2/3">
            <div className="hidden md:flex justify-between items-center pb-10 border-b-[#919191] border-b lg:mr-10">
              <h2 className="font-medium w-2/3 font-space-grotesk text-[32px]">Product</h2>
              <div className="flex w-1/3 justify-between">
                <h2 className="font-medium font-space-grotesk text-[32px]">Quantity</h2>
                <h2 className="font-medium font-space-grotesk text-[32px]">Price</h2>
              </div>
            </div>
            {products.map((product, index) => (
              <CartItem
                key={index}
                product={product}
                onRemove={handleRemove}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </div>
          <div className="w-full lg:w-1/3">
            <OrderSummary total={total} />
          </div>
        </div>

        <div className='mt-10'>
          <h1 className='font-space-grotesk lg:text-[64px] text-[24px] font-medium mb-10'> We think you’ll like these </h1>
          <Swipe />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
