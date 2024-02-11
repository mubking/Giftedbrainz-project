"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Asidebar from "./Asidebar/Asidebar";

const AppWrapper = ({ children }) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex">
      {pathname === "/dashboard" ||
      pathname === "/dashboard/competition" ||
      pathname === "/dashboard/leaderboard" ||
      pathname === "/dashboard/spin" ||
      pathname === "/dashboard/payment" ||
      pathname === "/dashboard/referrals" ||
      pathname === "/dashboard/settings" ||
      pathname === "/dashboard/gethelp" ? (
        <Asidebar isOpen={isOpen} handleOpenSideBar={handleOpenSideBar} />
      ) : (
        ""
      )}
      <div
        className={`w-full mt-10 md:mt-0 ${pathname === "/dashboard" ||
        pathname === "/dashboard/competition" ||
        pathname === "/dashboard/leaderboard" ||
        pathname === "/dashboard/spin" ||
        pathname === "/dashboard/payment" ||
        pathname === "/dashboard/referrals" ||
        pathname === "/dashboard/settings" ||
        pathname === "/dashboard/gethelp" ? (isOpen ? "pl-0 md:pl-[100px]" : "pl-0 md:pl-[250px]") : 
        (isOpen ? "pl-[0px]" : "pl-[0px]")}
        `}
      >
        {children}
      </div>
    </section>
  );
};

export default AppWrapper;
