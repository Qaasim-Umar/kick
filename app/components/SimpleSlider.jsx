'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import '../globals.css'; // Import your custom CSS

const Slider = dynamic(() => import('react-slick'), { ssr: false });

function SimpleSlider() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false, // Disable center mode for mobile
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false, // Disable center mode for mobile
          centerPadding: '0px',
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="bg-[#EDEEF2] py-14">
<h1 className='lg:text-[64px] font-medium font-space-grotesk text-[24px] text-center mb-5'>Deal of the day</h1>

      <div className="px-4">
        <Slider {...settings}>
          <div className="px-2 custom-slider-item">
            <Image src="/img/middle.png" width={400} height={400}  alt="Middle Image" />
          </div>
          <div className="px-2 custom-slider-item">
            <Image src="/img/right.png" width={300} height={300} alt="Right Image" />
          </div>
          <div className="px-2 custom-slider-item">
            <Image src="/img/left.png" width={300} height={300} alt="Left Image" />
          </div>
          <div className="px-2 custom-slider-item">
            <Image src="/img/middle.png" width={400} height={400} alt="Middle Image" />
          </div>
          <div className="px-2 custom-slider-item">
            <Image src="/img/right.png" width={300} height={300} alt="Right Image" />
          </div>
          <div className="px-2 custom-slider-item">
            <Image src="/img/left.png" width={300} height={300} alt="Left Image" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SimpleSlider;
