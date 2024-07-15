import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Swipe from '@/components/Swipe';
import axios from 'axios';

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const url = `https://api.timbu.cloud/products/${id}?organization_id=${process.env.NEXT_PUBLIC_ORG_ID}&page=1&size=30&Appid=${process.env.NEXT_PUBLIC_APP_ID}&Apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
          const response = await axios.get(url);

          if (response.status !== 200) {
            throw new Error('Network response was not ok');
          }

          setProduct(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  const reviews = [
    {
      name: "Blade X.",
      review: "I recently purchased a pair of running shoes from this site, the sneakers are incredibly comfortable. The delivery was fast, and the customer service was outstanding. Highly recommend!."
    },
    {
      name: "Blade X.",
      review: "Love my new sneakers! They look exactly like the photos and fit perfectly."
    },
    {
      name: "Blade X.",
      review: "This is my go-to site for all my sneaker needs. The variety is fantastic, and the prices are unbeatable. I recently bought a pair of high-tops, and they are stylish and super comfy."
    },
    {
      name: "Blade X.",
      review: "Love my new sneakers! They look exactly like the photos and fit perfectly."
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <Image src={product.image} alt="Product" width={200} height={200} className="h-[67vh] w-full object-cover bg-[#EDEEF2]" />
            <div className="flex lg:space-x-10 space-x-5 mt-2">
              <Image src="/img/c1.png" alt="Product" width={150} height={100} className="w-1/5 bg-[#EDEEF2]" />
              <Image src="/img/c2.png" alt="Product" width={150} height={100} className="w-1/5 bg-[#EDEEF2]" />
              <Image src="/img/c3.png" alt="Product" width={150} height={100} className="w-1/5 bg-[#EDEEF2]" />
              <Image src="/img/c4.png" alt="Product" width={150} height={100} className="w-1/5 bg-[#EDEEF2]" />
            </div>
          </div>

          <div className="flex-1 lg:ml-20">
            <h1 className="text-[24px] font-medium font-space-grotesk">{product.name}</h1>
            <div className="flex mt-4"><Image src="/img/star.svg" width={100} height={100} alt="" className='' /> ({product.rating}) </div>
            <p className="text-[32px] font-semibold mt-4">NGN{product.current_price[0].NGN[0]}</p>

            <div className="mt-4">
              <h2 className="text-[20px] font-space-grotesk mb-2 font-medium">Choose a colour</h2>
              <div className="flex space-x-2 mt-2 lg:space-x-10">
                <Image src='/img/bluenike.png' width={150} height={100} className="w-[80px] h-[80px] bg-[#EDEEF2] rounded-[4px]" />
                <Image src='/img/red.png' width={150} height={100} className="w-[80px] h-[80px] bg-[#EDEEF2] rounded-[4px]" />
                <Image src='/img/colored.png' width={150} height={100} className="w-[80px] h-[80px] bg-[#EDEEF2] rounded-[4px]" />
                <Image src='/img/rednike.png' width={150} height={100} className="w-[80px] h-[80px] bg-[#EDEEF2] rounded-[4px]" />
              </div>
            </div>

            <div className="mt-3">
              <h2 className="text-[20px] font-space-grotesk font-medium">Sizes</h2>
              <div className="flex flex-wrap mt-2">
                {['40', '41', '42', '43', '44', '45', '46', '46.5', '47', '48', '49', '50'].map(size => (
                  <div key={size} className="lg:w-[62px] lg:h-[61px] w-[40px] h-[40px] flex items-center justify-center rounded-[4px] bg-[#EDEEF2] lg:mr-5 lg:my-3 m-1">{size}</div>
                ))}
              </div>
            </div>
            <Link href="/pages/cartPage">
              <div className="flex items-center gap-5">
                <button className="mt-4 bg-black text-white py-2 px-4 rounded w-full">Add to cart</button>
                <Image src="/img/love3.svg" alt="" width={40} height={40} className='mt-4' />
              </div>
            </Link>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">
              <div className="mt-8 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Review(47)</h2>
                <Image src="/img/sort.svg" width={100} height={100} alt="" />
              </div>

              <div className="container text-[#1C1B1F] font-space-grotesk text-[20px] my-10">
                <div className="grid gap-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="py-4">
                      <h2 className="text-xl font-semibold">{review.name}</h2>
                      <div className="flex gap-2"><Image src="/img/star.svg" width={120} height={120} alt="" /> <small>2 days ago</small></div>
                      <div className="flex items-start justify-between">
                        <p className="mt-2 text-gray-700 w-[70%]">{review.review}</p>
                        <Image src="/img/thumb.svg" width={30} height={30} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 lg:ml-20">
              <div className="container text-[#1C1B1F]">
                <h1 className='font-space-grotesk font-semibold my-3 text-[24px]'>Product Description</h1>
                <p className='text-14px'>{product.description}</p>
              </div>

              <div className="container ml-3">
                <h1 className='font-space-grotesk font-semibold text-[24px] my-3'>Product Details</h1>
                <div className="flex ">
                  <ul className='list-disc text-[14px] space-y-5'>
                    <li>Regular fit</li>
                    <li>Lace closure</li>
                    <li>Leather upper</li>
                    <li>Textile and Synthetic lining</li>
                    <li>Rubber outsole</li>
                  </ul>

                  <ul className='list-disc text-[14px] space-y-5'>
                    <li>Imported</li>
                    <li>Product color: Off white / Halo blue / Rose gold</li>
                    <li>Textile and Synthetic lining</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <h1 className='font-space-grotesk lg:text-[64px] text-[24px] font-medium mb-10'>We think you’ll like these</h1>
          <Swipe />
        </div>
      </div>
      <Footer />
    </div>
  );
}
