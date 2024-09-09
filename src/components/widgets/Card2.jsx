import React, { useEffect, useRef, useState } from "react";
import { AnimatedTabs2 } from "../AnimatedTabs2";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Card2 = () => {
  const corouselRef = useRef();
  const [images, setImages] = useState([
    "/Image1.jpeg",
    "/Image1.jpeg",
    "/Image1.jpeg",
    "/Image1.jpeg",
  ]);

  console.log(images);
  //add responisve here
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1700 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1700, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleNext = () => {
    corouselRef.current.next();
  };

  const handlePrev = () => {
    corouselRef.current.previous();
  };

  useEffect(() => {}, [images]);
  const handleChange = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImages([...images, e.target.result]);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="sha flex bg-[#363C43] rounded-lg pb-3">
      <div className="relative flex flex-col mr-4 pl-2 w-[8%] pt-3">
        <img src="/questionMark.png" alt="" className="w-[50px]" />
        <img src="/grid.png" alt="" className="mt-20" />
      </div>
      <div className="pt-3 pr-3 w-[92%]">
        <div className="flex justify-between mb-7">
          <h3 className="bg-[#171717] text-white px-5 ml-2 py-3 rounded-3xl">
            Gallery
          </h3>
          <div className="flex items-center gap-2 pr-3">
            <label
              for="fileInput"
              class="bg-[#171717] text-white px-3 py-2 rounded-3xl flex justify-center items-center cursor-pointer"
            >
              <span>+</span> Add Image
              <input
                type="file"
                id="fileInput"
                class="hidden"
                onChange={handleChange}
              />
            </label>
            <MdKeyboardArrowLeft
              onClick={handlePrev}
              size={40}
              className=" bg-[#171717] rounded-full text-white font-thin"
            />
            <MdKeyboardArrowRight
              onClick={handleNext}
              size={40}
              className="bg-[#171717] rounded-full text-white"
            />
          </div>
        </div>
        {/* carousel */}

        <Carousel ref={corouselRef} responsive={responsive} arrows={false}>
          {images.map((item) => (
            <div className="relative overflow-hidden p-2 ">
              <img
                src={item}
                alt=""
                className="w-[190px] h-[170px] rounded-3xl transition-all duration-300 grayscale z-10 hover:scale-105 hover:-rotate-[3deg] hover:grayscale-0"
              />
            </div>
          ))}
          {/* <div className="relative overflow-hidden p-2 ">
            <img
              src="/Image1.jpeg"
              alt=""
              className="w-[190px] h-[170px] rounded-3xl transition-all duration-300 grayscale z-10 hover:scale-105 hover:-rotate-[3deg] hover:grayscale-0"
            />
          </div>
          <div className="relative overflow-hidden p-2">
            <img
              src="/Image1.jpeg"
              alt=""
              className="w-[190px] h-[170px] rounded-3xl transition-all duration-300 grayscale z-10 hover:scale-105 hover:-rotate-[3deg] hover:grayscale-0"
            />
          </div>
          <div className="relative overflow-hidden p-2">
            <img
              src="/Image1.jpeg"
              alt=""
              className="w-[190px] h-[170px] rounded-3xl transition-all duration-300 grayscale z-10 hover:scale-105 hover:-rotate-[3deg] hover:grayscale-0"
            />
          </div>
          <div className="relative overflow-hidden p-2">
            <img
              src="/Image1.jpeg"
              alt=""
              className="w-[190px] h-[170px] rounded-3xl transition-all duration-300 grayscale z-10 hover:scale-105 hover:-rotate-[3deg] hover:grayscale-0"
            />
          </div> */}
          {/* {images.length !== 0 && <img src={images[0]} alt="" />} */}
        </Carousel>
      </div>
    </div>
  );
};

export default Card2;
