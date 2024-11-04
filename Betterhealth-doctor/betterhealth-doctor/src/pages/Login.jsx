import React, { useEffect } from "react";
import doctorImage2 from "../assets/images/Animation-2.gif";
import sideRightImage1 from "../assets/images/doc.jpg";
import sideRightImage2 from "../assets/images/doc-2.avif";
import { NavLink } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaUserNurseSolid } from "react-icons/lia";
import { FaUsersLine } from "react-icons/fa6";
import { CiMedicalCase } from "react-icons/ci";
import { SiBandlab } from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { height, width } from "@mui/system";

const Login = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    TransitionEvent: "ease-in-out",
    innerHeight: '100%',
    innerWidth: '100%'
  };

  return (
    <div className="min-h-screen w-[100%] h-[100vh] flex items-center justify-center lg:justify-between bg-[#fefbfb]">
      {/* Left Information */}
      <div className="flex items-center ">
        <div className=" flex flex-col lg:px-16 items-start ">
          <div className="flex flex-col items-center ">
            <div className="w-14 h-14 2xl:w-40 2xl:h-40 rounded-full bg-[#483d8b]">
              <img
                src={doctorImage2}
                data-aos="fade-up"
                alt="Doctor Illustration"
                className="rounded-full w-10 2xl:w-36 h-10 2xl:h-36 mx-auto mt-4"
              />
            </div>

            <h1 className="font-[inter]  text-md 2xl:text-2xl font-semibold pt-1">Better Health</h1>
          </div>
          <div className="mt-8 md:mt-0 md:w-[70vw] lg:w-[35vw] md:ml-20 ">
            <div className="text-center mb-2">
              <h2 className="text-3xl 2xl:text-6xl leading-6 font-[inter] font-semibold">Hello Again!</h2>
              <p className="text-gray-600 font-[inter] text-md 2xl:text-2xl mt-1">
                Welcome back! Please Login according to 👇.
              </p>
            </div>
            <div className="w-full  h-auto space-y-1 2xl:space-y-10 ">
              <div className="flex items-center">
                <div className="w-18 2xl:w-40 h-auto p-3 2xl:p-10 bg-[#483d8b]">
                  <MdAdminPanelSettings className="w-10 2xl:w-20 h-10 2xl:h-20 text-white mx-auto" />
                </div>
                <NavLink
                  to={"/adminstaff"}
                  className="hover:bg-[rgba(72,61,139,0.1)] flex items-center justify-center w-full h-14 2xl:h-24 border-[3px] -ml-2 cursor-pointer font-[inter] font-medium text-xl 2xl:text-3xl transition-all duration-300 border-[#483d8b]"
                >
                  Admin staff
                </NavLink>
              </div>

              <div className="flex items-center">
                <div className="w-18 2xl:w-40 h-auto p-3 2xl:p-10 bg-[#483d8b]">
                  <FaUserDoctor className="w-10 2xl:w-20 h-10 2xl:h-20  text-white mx-auto" />
                </div>
                <NavLink
                  to={"/doctor"}
                  className="hover:bg-[rgba(72,61,139,0.1)] flex items-center justify-center w-full h-14 2xl:h-24 border-[3px] -ml-2 cursor-pointer font-[inter] font-medium text-xl 2xl:text-3xl transition-all duration-300 border-[#483d8b]"
                >
                  Doctor
                </NavLink>
              </div>

              <div className="flex items-center">
                <div className="w-18 2xl:w-40 h-auto p-3 2xl:p-10 bg-[#483d8b]">
                  <LiaUserNurseSolid className="w-10 2xl:w-20 h-10 2xl:h-20  text-white mx-auto" />
                </div>
                <NavLink
                  to={"/nurse"}
                  className="hover:bg-[rgba(72,61,139,0.1)] flex items-center justify-center w-full h-14 2xl:h-24 border-[3px] -ml-2 cursor-pointer font-[inter] font-medium text-xl 2xl:text-3xl transition-all duration-300 border-[#483d8b]"
                >
                  Nurse
                </NavLink>
              </div>

              <div className="flex items-center">
                <div className="w-18 2xl:w-40 h-auto p-3 2xl:p-10 bg-[#483d8b]">
                  <CiMedicalCase className="w-10 2xl:w-20 h-10 2xl:h-20  text-white mx-auto" />
                </div>
                <NavLink
                  to={"/staff"}
                  className="hover:bg-[rgba(72,61,139,0.1)] flex items-center justify-center w-full h-14 2xl:h-24 border-[3px] -ml-2 cursor-pointer font-[inter] font-medium text-xl 2xl:text-3xl transition-all duration-300 border-[#483d8b]"
                >
                  Pharmacist
                </NavLink>
              </div>

              <div className="flex items-center">
                <div className="w-18 2xl:w-40 h-auto p-3 2xl:p-10 bg-[#483d8b]">
                  <SiBandlab className="w-10 2xl:w-20 h-10 2xl:h-20  text-white mx-auto" />
                </div>
                <NavLink
                  to={"/staff"}
                  className="hover:bg-[rgba(72,61,139,0.1)] flex items-center justify-center w-full h-14 2xl:h-24 border-[3px] -ml-2 cursor-pointer font-[inter] font-medium text-xl 2xl:text-3xl transition-all duration-300 border-[#483d8b]"
                >
                  Lab Technician
                </NavLink>
              </div>

              <div className="flex items-center">
                <div className="w-18 2xl:w-40 h-auto p-3 2xl:p-10 bg-[#483d8b]">
                  <FaUsersLine className="w-10 2xl:w-20 h-10 2xl:h-20  text-white mx-auto" />
                </div>
                <NavLink
                  to={"/staff"}
                  className="hover:bg-[rgba(72,61,139,0.1)] flex items-center justify-center w-full h-14 2xl:h-24 border-[3px] -ml-2 cursor-pointer font-[inter] font-medium text-xl 2xl:text-3xl transition-all duration-300 border-[#483d8b]"
                >
                  Other Staff
                </NavLink>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Right Information */}
      <div className="hidden lg:block lg:h-[100vh] lg:w-[500px] xl:w-[600px]  2xl:w-[1100px] lg:overflow-hidden bg-[blue] ">
        {/* <div className="w-[100%] h-[100%] bg-[red]"></div> */}
        <Slider {...sliderSettings}>
          <div className="w-[100%] h-[100vh] ">
            <img
              src={sideRightImage1}
              alt="hospital1"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="w-[100%] h-[100vh] ">
            <img
              src={sideRightImage2}
              alt="hospital2"
              className="w-[100%] h-[100%] object-cover "
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Login;
