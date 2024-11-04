import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft, FaEllipsisH  } from "react-icons/fa";
import { GrLink } from "react-icons/gr";

const LabTest = () => {
  const sliderRef = React.useRef(null);

  const slides = [
    {
      name: "Shawn Hampton",
      testName: "Beta 2 Microglobulin",
      description: "Marker Test",
      buttons: ["Details", "Contact Patient", "Archive"],
    },
    {
      name: "Shawn Hampton",
      testName: "Beta 2 Microglobulin",
      description: "Marker Test",
      buttons: ["Details", "Contact Patient", "Archive"],
    },
    {
      name: "Shawn Hampton",
      testName: "Beta 2 Microglobulin",
      description: "Marker Test",
      buttons: ["Details", "Contact Patient", "Archive"],
    },
    {
      name: "John Doe",
      testName: "Another Test",
      description: "Sample Test",
      buttons: ["Details", "Contact Patient", "Archive"],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
  };

  return (
    <div className="lg:w-full lg:max-w-md w-full relative bg-white rounded-lg shadow-lg h-72">
        <div className="border-b border-stone-200 flex items-center justify-between pl-4 py-4">
            <h2 className="text-2xl font-light">Laboratory Test</h2>  

        
            <div className="flex space-x-4 pr-4">
            <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current.slickNext()} />
            </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
        
            {slides.map((slide, index) => (
                <div key={index}>
                    <div className="pt-10 px-4">
                        <div className="flex items-center justify-between">
                            <div className="text-gray-600 text-md  hover:text-violet-600 cursor-grab flex items-center"> <GrLink/>{slide.name}</div>
                                <FaEllipsisH  className="text-gray-400 cursor-pointer text-lg"/>
                        </div>
                        <h3 className="text-xl font-normal text-gray-900 mt-2">{slide.testName}</h3>
                        <p className="text-lg text-gray-900">{slide.description}</p>
                        <div className="flex justify-between mt-4">
                            {slide.buttons.map((buttonLabel, i) => (
                            <button key={i} className="px-4 py-1 bg-violet-100 text-violet-700 hover:bg-violet-700 hover:text-white rounded-md">{buttonLabel}</button>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  );
};


const NextArrow = ({ onClick }) => {
  return (
    <div className="cursor-pointer text-black text-xl" onClick={onClick}>
        <FaChevronRight />
    </div>
  );
};


const PrevArrow = ({ onClick }) => {
  return (
    <div className="cursor-pointer text-black text-xl" onClick={onClick}>
        <FaChevronLeft />
    </div>
  );
};

export default LabTest;
