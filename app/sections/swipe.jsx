'use client'

import React from "react";
import Slider from "react-slick";
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

function Swipe() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <div className="border border-gray-[#EDEEF2] rounded-lg flex flex-col w-full md:w-[80%]">
                        <div className="relative bg-[#EDEEF2] rounded-lg">
                            <Image
                                src="/img/pinknike.png"
                                alt=""
                                width={500}
                                height={500}
                                className="object-cover rounded-t-lg"
                            />
                            <button className="absolute top-4 right-3 bg-white p-1 rounded-full border border-gray-[#EDEEF2]">
                                <Image src="/img/love.svg" alt="" width={40} height={40} />
                            </button>
                        </div>

                        <div className="p-4 bg-white rounded-b-lg ''">
                            <p className="lg:text-[26px] font-medium font-space-grotesk">Nike Airforce 107</p>
                            <div className="mt-2 flex justify-between">
                                <span className="text-[14px] lg:text-xl font-bold">$80</span>
                                <span className="text-gray-500 text-sm flex items-center ">
                                    <Image src="/img/star.svg" width={40} height={40} alt="" />
                                    <span className="ml-1">(24)</span>
                                </span>
                            </div>
                            <button className="mt-2">
                                <Image src="/img/blackcart.svg" width={40} height={40} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border border-gray-[#EDEEF2] rounded-lg flex flex-col w-full md:w-[80%]">
                        <div className="relative bg-[#EDEEF2] rounded-lg">
                            <Image
                                src="/img/bluenike.png"
                                alt=""
                                width={500}
                                height={500}
                                className="object-cover rounded-t-lg"
                            />
                            <button className="absolute top-4 right-3 bg-white p-1 rounded-full border border-gray-[#EDEEF2]">
                                <Image src="/img/love.svg" alt="" width={40} height={40} />
                            </button>
                        </div>

                        <div className="p-4 bg-white rounded-b-lg flex justify-between">
                            <div>
                            <p className="lg:text-[26px] font-medium font-space-grotesk">Nike Air Max 901</p>
                            <div className="mt-2 flex justify-between">
                                <span className="text-[14px] lg:text-xl font-bold">$120</span>
                                <span className="text-gray-500 text-sm flex items-center ">
                                    <Image src="/img/star.svg" width={40} height={40} alt="" />
                                    <span className="ml-1">(24)</span>
                                </span>
                            </div>
                            </div>
                            <button className="mt-2">
                                <Image src="/img/blackcart.svg" width={40} height={40} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border border-gray-[#EDEEF2] rounded-lg flex flex-col w-full md:w-[80%]">
                        <div className="relative bg-[#EDEEF2] rounded-lg">
                            <Image
                                src="/img/red.png"
                                alt=""
                                width={500}
                                height={500}
                                className="object-cover rounded-t-lg"
                            />
                            <button className="absolute top-4 right-3 bg-white p-1 rounded-full border border-gray-[#EDEEF2]">
                                <Image src="/img/love.svg" alt="" width={40} height={40} />
                            </button>
                        </div>

                        <div className="p-4 bg-white rounded-b-lg">
                            <p className="lg:text-[26px] font-medium font-space-grotesk">Air Jordan 13 R.</p>
                            <div className="mt-2 flex justify-between">
                                <span className="text-[14px] lg:text-xl font-bold">$125</span>
                                <span className="text-gray-500 text-sm flex items-center">
                                    <Image src="/img/star.svg" width={40} height={40} alt="" />
                                    <span className="ml-1">(24)</span>
                                </span>
                            </div>
                            <button className="mt-2">
                                <Image src="/img/blackcart.svg" width={40} height={40} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border border-gray-[#EDEEF2] rounded-lg flex flex-col w-full md:w-[80%]">
                        <div className="relative bg-[#EDEEF2] rounded-lg">
                            <Image
                                src="/img/bluenike.png"
                                alt=""
                                width={500}
                                height={500}
                                className="object-cover rounded-t-lg"
                            />
                            <button className="absolute top-4 right-3 bg-white p-1 rounded-full border border-gray-[#EDEEF2]">
                                <Image src="/img/love.svg" alt="" width={40} height={40} />
                            </button>
                        </div>

                        <div className="p-4 bg-white rounded-b-lg">
                            <p className="lg:text-[26px] font-medium font-space-grotesk">Nike Air Max 90</p>
                            <div className="mt-2 flex justify-between">
                                <span className="text-[14px] lg:text-xl font-bold">$80</span>
                                <span className="text-gray-500 text-sm flex items-center ">
                                    <Image src="/img/star.svg" width={40} height={40} alt="" />
                                    <span className="ml-1">(24)</span>
                                </span>
                            </div>
                            <button className="mt-2">
                                <Image src="/img/blackcart.svg" width={40} height={40} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Swipe;
