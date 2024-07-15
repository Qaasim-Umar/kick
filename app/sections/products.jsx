'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.timbu.cloud/products`, {
          params: {
            organization_id: process.env.NEXT_PUBLIC_ORG_ID,
            Appid: process.env.NEXT_PUBLIC_APP_ID,
            Apikey: process.env.NEXT_PUBLIC_API_KEY
          }
        });
        
        const data = response.data;
        console.log('Fetched data:', data); // Log the fetched data

        console.log(data.items[1]); 
        // Access the items array within the fetched data
        if (data && Array.isArray(data.items)) {
          setProducts(data.items);
        } else {
          throw new Error('Data does not contain items array');
        }
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once on component mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="min-h-screen lg:px-[130px] px-5 py-14 font-space-grotesk">
        <h2 className="lg:text-[64px] text-[24px] font-medium mb-14 text-center">Recently viewed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {Array.isArray(products) && products.map((product) => (
            <div key={product.id} className="border border-gray-[#EDEEF2] rounded-lg flex flex-col">
              <div className="relative bg-[#EDEEF2] rounded-lg">
                <Link key={product.id} href={`/productdetails/${product.id}`}>
                  <div>
                    <Image src={product.image} alt={product.name} width={500} height={500} className="object-cover rounded-t-lg cursor-pointer" />
                  </div>
                </Link>
                <button className="absolute top-4 right-3 bg-white p-1 rounded-full border border-gray-[#EDEEF2]">
                  <Image src="/img/love.svg" alt="" width={40} height={40} />
                </button>
              </div>
              <div className="mt-1 p-4 flex-1 flex justify-between bg-white rounded-lg">
                <div className="flex flex-col">
                  <p className="lg:text-[26px] font-medium">{product.name}</p>
                  <div className="mt-2 flex justify-between">
                    <span className="text-[14px] lg:text-xl font-bold">NGN{product.current_price[0].NGN[0]}</span>
                    <span className="text-gray-500 text-sm flex items-center mr-6">
                      <Image src="/img/star.svg" width={70} height={70} alt="" />
                      ({product.rating})
                    </span>
                  </div>
                </div>
                <button>
                  <Image src="/img/blackcart.svg" width={40} height={40} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
