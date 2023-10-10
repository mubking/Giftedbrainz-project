"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiArrowFromLeft, BiRun } from "react-icons/bi";
import { IoIosArrowDropright } from "react-icons/io";
import { RiDashboard3Line,RiCommunityLine } from "react-icons/ri";
import { PiSpinnerGapFill } from "react-icons/pi";
import { FaGraduationCap, FaHistory } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { TbChartHistogram } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { FiHelpCircle } from "react-icons/fi";
import { SiLeaderprice } from "react-icons/si";

const Asidebar = ({isOpen, handleOpenSideBar}) => {
  const asideData = [
    {
      dashboard: {
        icon: <RiDashboard3Line />,
        link: "dashboard",
        pathname: "",
      },
      menu: [
        {
          icon: <BiRun />,
          link: "Quiz competition",
          pathname: "competition",
        },
        {
          icon: <SiLeaderprice />,
          link: "Quiz leaderboard",
          pathname: "leaderboard",
        },
        {
          icon: <PiSpinnerGapFill />,
          link: "spin to win",
          pathname: "spin",
        },
        {
          icon: <FaGraduationCap />,
          link: "Courses",
          pathname: "courses",
        },
        {
          icon: <MdPayments />,
          link: "payment ",
          pathname: "payment ",
        },
        {
          icon: <BiRun />,
          link: "referrals history",
          pathname: "referrals",
        },
        {
          icon: <FaHistory />,
          link: "earnings history",
          pathname: "earnings",
        },
      ],
      settings: [
        {
          icon: <CiSettings />,
          link: "settings",
          pathname: "settings",
        },
        {
          icon: <FiHelpCircle />,
          link: "get help",
          pathname: "gethelp",
        },
        {
          icon: <RiCommunityLine />,
          link: "community",
          pathname: "community",
        },
      ],
    },
  ];
  
  return (
    <aside
      className={`flex flex-col  transition-all duration-300 ease-linear gap-3 ${
        isOpen ? "w-[100px]" : "w-[250px]"
      } border-r min-h-screen fixed top-0 left-0 bottom-0 bg-white`}
    >
      <div className="logo flex h-[10vh] w-full items-center px-3 relative justify-between">
        <Image src={"/brainz.png"} height={70} width={70} alt="logo" priority />
        <IoIosArrowDropright
          onClick={handleOpenSideBar}
          className="text-[#4A5568] absolute right-[-14px] font-[700] text-[25px]"
        />
      </div>
      <Link href={`/dashboard/${asideData[0].dashboard.pathname}`} className="dashboard h-[10vh] flex px-4 py-3 text-white gap-3 bg-[#5852FE]  items-center">
        <span className={`text-[22px] ${isOpen&&"mx-auto"} `}>{asideData[0].dashboard.icon}</span>
        {!isOpen && (
          <span className="capitalize" >
            {asideData[0].dashboard.link}
          </span>
        )}
      </Link>
      <div className="menu h-[45vh] flex flex-col gap-4 px-4">
        {asideData[0].menu.map((asd, i) => (
          <Link href={`/dashboard/${asd.pathname}`} key={i} className={`menu  w-full flex-row flex gap-3 items-center`}>
            <span className={`text-[22px] ${isOpen&&"mx-auto"} text-[#5852FE] `}>{asd.icon}</span>
            {!isOpen && <span>{asd.link}</span>}
          </Link>
        ))}
      </div>
      <div className="setting h-[35vh]   justify-center flex bg-[#5852FE] text-white flex-col gap-4 px-4">
        {asideData[0].settings.map((asd, i) => (
          <Link href={`/dashboard/${asd.pathname}`} key={i} className={`menu  w-full flex-row flex gap-3 items-center`}>
            <span className={`text-[22px] ${isOpen&&"mx-auto"}`}>{asd.icon}</span>
            {!isOpen && <span>{asd.link}</span>}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Asidebar;
