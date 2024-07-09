"use client";

import { useRouter } from 'next/navigation';
import Footer from '@/app/sections/footer';
import Image from 'next/image';

export default function ProductDetail({ params }) {
  const router = useRouter();
  const { id } = params;


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
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column: Product Images */}
          <div className="flex-1">
            <Image src="/img/red.png" alt="Product" width={100} height={100} className="h-[67vh] w-full object-cover bg-[#EDEEF2]" />
            <div className="flex space-x-2 mt-2">
              <Image src="/img/red.png" alt="Product" width={100} height={100} className="w-1/5 bg-[#EDEEF2]" />
              <Image src="/img/red.png" alt="Product" width={100} height={100} className="w-1/5 bg-[#EDEEF2]" />
              <Image src="/img/red.png" alt="Product" width={100} height={100} className="w-1/5 bg-[#EDEEF2]" />
              <Image src="/img/red.png" alt="Product" width={100} height={100} className="w-1/5 bg-[#EDEEF2]" />
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="flex-1 lg:ml-20">
            <h1 className="text-[24px] font-medium font-space-grotesk">Nike G.T. Hustle 3 Blueprint</h1>
            <div className="flex mt-4"><Image src="/img/star.svg" width={100} height={100} alt="" className='' /> (5.0) </div>
            <p className="text-[32px] font-semibold  mt-4">$280.00</p>

            <div className="mt-4">
              <h2 className="text-[20px] font-space-grotesk mb-2 font-medium">Choose a colour</h2>
              <div className="flex space-x-2 mt-2 lg:space-x-10">
                {/* Colour options */}
                <Image src='' className="w-[80px] h-[80px] bg-[#EDEEF2]  rounded-[4px]" />
                <Image src='' className="w-[80px] h-[80px] bg-[#EDEEF2]  rounded-[4px]" />
                <Image src='' className="w-[80px] h-[80px] bg-[#EDEEF2]  rounded-[4px]" />
                <Image src='' className="w-[80px] h-[80px] bg-[#EDEEF2]  rounded-[4px]" />
              </div>
            </div>

            <div className="mt-3">
              <h2 className="text-[20px] font-space-grotesk font-medium">Sizes</h2>
              <div className="flex flex-wrap mt-2">
                {/* Size options */}
                {['40', '41', '42', '43', '44', '45', '46', '46.5', '47', '48', '49', '50'].map(size => (
                  <div key={size} className="lg:w-[62px] lg:h-[61px]  w-[40px] h-[40px] flex items-center justify-center rounded-[4px] bg-[#EDEEF2]  lg:mr-5 lg:my-3 m-1">{size}</div>
                ))}
              </div>
            </div>

            <button className="mt-4 bg-black text-white py-2 px-4 rounded">Add to cart</button>
          </div>
        </div>












        <div className="container mx-auto p-4">
          <div className="flex flex-col lg:flex-row">
            {/* Left Column: Product Images */}
            <div className="flex-1">

              {/* Product Description */}
              <div className="mt-8 flex items-center justify-between ">
                <h2 className="text-2xl font-semibold">Review(47)</h2>
                <Image src="/img/sort.svg" width={100} height={100} alt="" />
              </div>

              <div className="container text-[#1C1B1F] font-space-grotesk text-[20px] my-10">
                <div className="grid gap-4">
                  {reviews.map((review, index) => (
                    <div key={index} className="py-4">
                      <h2 className="text-xl font-semibold">{review.name}</h2>

                      <div className="flex gap-2"><Image src="/img/star.svg" width={120} height={120} alt="" /> <small>2days ago</small></div>
                      <div className="flex items-start justify-between">
                        <p className="mt-2 text-gray-700 w-[70%] ">{review.review}</p>
                        <Image src="/img/thumb.svg" width={30} height={30} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>



            </div>






            {/* Right Column: Product Details */}
            <div className="flex-1 lg:ml-20">

              <div className="container text-[#1C1B1F]">
                <h1 className='font-space-grotesk font-semibold text-[24px] '>Product Description</h1>
                <p className='text-14px'>These Nike G.T. Hustle 3 Blueprint shoes give the classic Samba silhouette a stylish, elevated update. The premium leather upper features embroidered 3-Stripes for a fresh edge while metallic accents add a touch of shine. The thick rubber outsole stands on its own but references the iconic look of the original style. Whether you pair them with jeans, tights or a maxi dress, they&apos;re perfect for adding a retro-cool vibe to any outfit.
                  As recreational running established widespread popularity in the 1970s, the benchmark for running footwear shifted from mere existence to performance. While the era&apos;s designs would be considered simple by today&apos;s standards, the decade stands out as the moment when running shoes truly came into their own. The New Balance 327 sheds new light on the &apos;70s as a time of innovation by boldly reshaping classic design elements with a thoroughly contemporary outlook. With an angular reworking of the tried-and-true wedge silhouette, outsize, asymmetrically applied &apos;N&apos; branding, and wraparound, trail-inspired lug outsole, the New Balance 327 provides nothing less than a complete reimagination of our running heritage.
                </p>
              </div>

              <div className="container">
                <h1 className='font-space-grotesk font-semibold text-[24px]'>Product Details</h1>
                <div className="flex">
                  <ul className=' list-disc text-[14px] space-y-5'>
                    <li>Regular fit</li>
                    <li>Lace closure</li>
                    <li>Leather upper</li>
                    <li>Textile and Synthetic lining </li>
                    <li>Rubber outside</li>
                  </ul>

                  <ul className=' list-disc text-[14px] space-y-5'>
                    <li>Imported</li>
                    <li>Product color: Off white / Halo blue / Rose gold</li>
                    <li>Textile and Synthetic lining</li>
                  </ul>
                </div>

              </div>





            </div>
          </div>
        </div>




      </div>
      <Footer />
    </div>
  );
}
