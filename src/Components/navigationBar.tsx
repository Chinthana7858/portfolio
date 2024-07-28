"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useGlobalState } from "@/app/context/GlobalStateContext";
const Navbar = () => {
  const { number, setNumber, dark, setDark } = useGlobalState();
  return (
    <>
      <div className="h-10 sticky top-0 flex w-screen bg-transparent ">
        <div className=" basis-1/12">
          {/* <div className=" py-2 ">
            <BsFillMoonStarsFill className="text-2xl cursor-pointer " onClick={()=>{setDark(!dark)}} />
          </div>{" "} */}
        </div>
        <div className=" basis-auto">
          <Link href="/">
            <div
              className={`p-2 cursor-pointer rounded-full text-center mx-1 ${
                number === 0
                  ? "bg-teal-200 dark:bg-teal-600"
                  : "hover:bg-teal-200 dark:hover:bg-teal-600"
              }`}
              onClick={() => {
                setNumber(0);
                console.log(number);
              }}
            >
              {" "}
              Home
            </div>{" "}
          </Link>
        </div>
        <div className=" basis-auto">
          <Link href="/About">
          <div
              className={`p-2 cursor-pointer rounded-full text-center mx-1 ${
                number === 1
                  ? "bg-teal-200 dark:bg-teal-600"
                  : "hover:bg-teal-200 dark:hover:bg-teal-600"
              }`}
              onClick={() => {
                setNumber(1);
              }}
            >
              About
            </div>{" "}
          </Link>
        </div>
        <div className=" basis-auto">
          <Link href="/Projects">
          <div
              className={`p-2 cursor-pointer rounded-full text-center mx-1 ${
                number === 2
                  ? "bg-teal-200 dark:bg-teal-600"
                  : "hover:bg-teal-200 dark:hover:bg-teal-600"
              }`}
              onClick={() => {
                setNumber(2);
              }}
            >
              Projects
            </div>
          </Link>
        </div>
        <div className=" basis-auto">
          <Link href="/Contact">
          <div
              className={`p-2 cursor-pointer rounded-full text-center mx-1 ${
                number === 3
                  ? "bg-teal-200 dark:bg-teal-600"
                  : "hover:bg-teal-200 dark:hover:bg-teal-600"
              }`}
              onClick={() => {
                setNumber(3);
              }}
            >
              Contact
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
