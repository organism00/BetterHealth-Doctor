import React, { useState } from "react";
import anime from "../../assets/images/Animation-2.gif";
// import custom from "../../adminDashboardAssets/custom-17.svg";
import custom from "../../assets/images/custom-17.svg";
// import "../App.css";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { TbScan } from "react-icons/tb";
import { PiDiamondsFourFill } from "react-icons/pi";
import { IoIosSwitch } from "react-icons/io";
import { TbDeviceAnalytics } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { FaHospital } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { MdAccessibilityNew } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";
import menuImage from "../../assets/Images/menu (2).png";
import "../../styles/customScrollbar.css";

const SideBar = () => {
  const [showPatientsDropdown, setShowPatientsDropdown] = useState(false);
  const [showReportDropdown, setShowReportDropdown] = useState(false);
  const [showDoctorsDropdown, setShowDoctorsDropdown] = useState(false);
  const [showNurseDropdown, setShowNurseDropdown] = useState(false);
  const [showBillingDropdown, setShowBillingDropdown] = useState(false);
  const [showFacilitiesDropdown, setShowFacilitiesDropdown] = useState(false);
  const [showPharmarcyDropdown, setShowPharmarcyDropdown] = useState(false);
  const [featuresdropdown, setfeaturesdropdown] = useState(false);
  const [appsdropdown, setappsdropdown] = useState(false);
  const [formsdropdown, setformsdropdown] = useState(false);
  const [authdropdown, setauthdropdown] = useState(false);
  const [miscdropdown, setmiscdropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the Dashboard dropdown
  const misc = () => {
    setmiscdropdown((prev) => !prev);
  };
  const auth = () => {
    setauthdropdown((prev) => !prev);
  };
  const forms = () => {
    setformsdropdown((prev) => !prev);
  };
  const apps = () => {
    setappsdropdown((prev) => !prev);
  };
  const features = () => {
    setfeaturesdropdown((prev) => !prev);
  };

  // Function toggle for sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Function to toggle the Patients dropdown
  const togglePatientsDropdown = () => {
    setShowPatientsDropdown((prev) => !prev);
  };
  // Function to toggle the REPORT dropdown
  const toggleReportDropdown = () => {
    setShowReportDropdown((prev) => !prev);
  };
  // Function to toggle the Doctors dropdown
  const toggleDoctorsDropdown = () => {
    setShowDoctorsDropdown((prev) => !prev);
  };

  const toggleNurseDropdown = () => {
    setShowNurseDropdown((prev) => !prev);
  };

  const toggleBillingDropdown = () => {
    setShowBillingDropdown((prev) => !prev);
  };
  const toggleFacilitiesDropdown = () => {
    setShowFacilitiesDropdown((prev) => !prev);
  };
  const togglePharmarcyDropdown = () => {
    setShowPharmarcyDropdown((prev) => !prev);
  };

  return (
    <div className="lg:grid lg:grid-cols-[15rem_1fr]">
      <aside className="w-screen h-20 top-0 bg-violet-50 lg:hidden fixed z-50">
        <div className="flex items-center justify-between px-6 md:px-20">
          <div className="flex gap-4 items-center justify-center py-2">
            <div className="w-14 h-14 rounded-full bg-[#483d8b]">
              <img
                src={anime}
                alt="Doctor Illustration"
                className="rounded-[360px] w-12 h-12 mx-auto "
              />
            </div>

            <h1 className="self-center  text-2xl font-semibold pt-2">
              Better Health
            </h1>
          </div>

          <img
            className="w-6 h-6"
            src={menuImage}
            alt="menu"
            onClick={toggleSidebar}
          />

          {/* Sidebar content for mobile start Here */}
          <div
            className={`fixed top-16 left-0 w-[60vw] md:w-[36vw] h-screen bg-violet-50 transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="mt-4 ">
              <div className="max-h-[100%] scrollable-div flex flex-col w-[60vw] md:w-[36vw] h-screen px-7">
                {/* Sidebar content */}
                <div className="flex flex-col gap-y-7 mt-8 ">
                  <div className="flex justify-between w-28 items-center">
                    <TbLayoutDashboardFilled className="text-xl" />
                    <Link
                      to={"/admindashboard"}
                      className="hover:text-blue-400"
                    >
                      Dashboard
                    </Link>
                  </div>
                  <div className="flex justify-between w-32 items-center">
                    <BsCalendarDate className="text-xl" />

                    <a href="#" className="hover:text-blue-400">
                      Appointments
                    </a>
                  </div>

                  {/* Patients Dropdown */}
                  <div>
                    <div
                      className="flex justify-between w-[40vw] items-center flex-row"
                      onClick={togglePatientsDropdown}
                    >
                      <div className="flex justify-between w-20 items-center">
                        <PiDiamondsFourFill className="text-xl" />
                        <a href="#" className="hover:text-blue-400">
                          Patients
                        </a>
                      </div>
                      <RiArrowDropDownLine className="text-xl" />
                    </div>
                    {showPatientsDropdown && (
                      <div className="flex flex-col items-center justify-center my-4 text-start">
                        <ul className="space-y-4">
                          {/* <li className="list-disc hover:text-blue-400">
                            <a href="#">New Patient</a>
                          </li> */}
                          <li className="list-disc hover:text-blue-400">
                            <Link to={"/patientlist"}>Patient List</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Report */}
                  <div>
                    <div
                      className="flex justify-between w-[40vw] items-center flex-row"
                      onClick={toggleReportDropdown}
                    >
                      <div className="flex justify-between w-20 items-center">
                        <IoIosSwitch className="text-xl" />
                        <a href="#" className="hover:text-blue-400">
                          Lab Test
                        </a>
                      </div>
                      <RiArrowDropDownLine className="text-xl" />
                    </div>
                    {showReportDropdown && (
                      <div className="flex flex-col items-center justify-center my-4 text-start">
                        <ul className="space-y-4">
                          <li className="list-disc hover:text-blue-400">
                            <a href="#">Request</a>
                          </li>
                          <li className="list-disc hover:text-blue-400">
                            <a href="#"> Report</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div></div>
                </div>
                {/* Billing */}

                <div className="flex flex-col gap-y-7 mt-8 ">
                  <div className="flex flex-col gap-y-7 mt-2">
                    <div></div>
                  </div>
                </div>

                {/* Sidebar Footer */}
                <div className="pb-10 flex flex-col items-center">
                  <img src={custom} className="relative top-12 md:w-[150px] " />
                  <div className="w-52 h-36 bg-indigo-300 rounded-2xl pt-16">
                    <h1 className="text-lg text-center">Make an Appointment</h1>
                    <p className="text-center">Best Health Care here</p>
                  </div>
                </div>
                <div className="pb-24 flex flex-col items-center">
                  <p>&copy; Better Health</p>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar content for mobile  Here */}
        </div>
      </aside>

      {/* Sidebar content for Large view start  */}
      {/* Sidebar content for Large view start  */}
      {/* Sidebar content for Large view start  */}
      {/* Sidebar content for Large view start  */}
      <aside className="w-[238px] h-[120vh] lg:block bg-stone-50 fixed top-0 left-0 hidden">
        <div className="w-[200px] h-20 fixed gap-2 flex items-center justify-center ">
          <div className="flex gap-1 ">
            <div className="w-14 h-14 rounded-full bg-[#483d8b]">
              <img
                src={anime}
                alt="Doctor Illustration"
                className="rounded-[360px] w-12 h-12 mx-auto "
              />
            </div>

            <h1 className="self-center text-xl font-semibold pt-2">
              Better Health
            </h1>
          </div>
        </div>

        <div className="mt-20 ">
          <div className="max-h-[100%] scrollable-div flex flex-col w-[238px] h-screen px-7  ">
            <div className="flex flex-col gap-y-7 mt-8">
              <div className="flex gap-4 items-center ">
                <TbLayoutDashboardFilled className="text-xl" />
                <Link to={"/doctordashboard"} className="hover:text-blue-400">
                  Dashboard
                </Link>
              </div>
              <div className="flex gap-4 items-center">
                <BsCalendarDate className="text-xl" />
                <Link className="hover:text-blue-400" to={"/appointments"}>Appointments</Link>
                
              </div>

              <div>
                <div
                  className="flex justify-between w-[13vw] items-center flex-row"
                  onClick={togglePatientsDropdown}
                >
                  <div className="flex justify-between gap-4 items-center">
                    <PiDiamondsFourFill className="text-xl" />
                    <a href="#" className="hover:text-blue-400">
                      Patients
                    </a>
                  </div>
                  <RiArrowDropDownLine className="text-xl" />
                </div>

                {showPatientsDropdown && (
                  <div className="flex flex-col items-center justify-center my-4 text-start">
                    <ul className="space-y-4">
                      {/* <li className="list-disc hover:text-blue-400">
                        <Link to={"/newpatient"}>New Patient </Link>
                      </li> */}
                      <li className="list-disc hover:text-blue-400">
                        {" "}
                        <Link to={"/patientlist"}>Patient List</Link>
                      </li>
                      {/* <li className="list-disc hover:text-blue-400">
                        {" "}
                        <Link to={"/patientlist"}>Insurance</Link>
                      </li> */}
                    </ul>
                  </div>
                )}
              </div>
              <div>
                <div
                  className="flex justify-between w-[13vw] items-center flex-row"
                  onClick={toggleReportDropdown}
                >
                  <div className="flex justify-between gap-4 items-center">
                    <IoIosSwitch className="text-xl" />
                    <a href="#" className="hover:text-blue-400">
                      Lab Test
                    </a>
                  </div>
                  <RiArrowDropDownLine className="text-xl" />
                </div>

                {showReportDropdown && (
                  <div className="flex flex-col items-center justify-center my-4 text-start">
                    <ul className="space-y-4">
                      <li className="list-disc hover:text-blue-400">
                        <Link to="">Request </Link>
                      </li>
                      <li className="list-disc hover:text-blue-400">
                        {" "}
                        <Link to="">Report</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="pb-10 flex flex-col items-center ">
              <img src={custom} className="relative top-12 w-[120px] " />
              <div className="p-2 h-36 bg-indigo-300 rounded-2xl pt-16">
                <h1 className="text-[2vmin] text-center">
                  Make an Appointments
                </h1>
                <p className="text-center">Best Health Care here</p>
              </div>
            </div>
            <div className="pb-24 flex flex-col items-center ">
              <p>&copy; Better Health</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
