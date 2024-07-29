"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useGlobalState } from "@/app/context/GlobalStateContext";
const Navbar = () => {
  const { number, setNumber, dark, setDark } = useGlobalState();
  return (
    <>
      <div className="h-10 sticky top-0 flex w-screen bg-transparent">
        <div className=" basis-1/12">
          <div className=" py-2 ">
            <BsFillMoonStarsFill
              className="text-2xl cursor-pointer "
              onClick={() => {
                setDark(!dark);
              }}
            />
            {dark?"Dark":"Light"}
          </div>{" "}
        </div>
        <div className=" basis-auto">
          <Link href="/">
            <div
              className={`p-2 cursor-pointer rounded-full text-center mx-1 ${
                number === 0 ? "bg-teal-500 " : " hover:bg-teal-500  "
              }`}
              onClick={() => {
                setNumber(0);
                console.log(number);
              }}
            >
              {" "}
              <div
                className={` ${
                  number === 0 ? " text-white" : ""
                } hover:text-white`}
              >
                Home
              </div>
            </div>{" "}
          </Link>
        </div>
        <div className=" basis-auto">
          <Link href="/About">
            <div
              className={`p-2 cursor-pointer rounded-full text-center mx-1 ${
                number === 1 ? "bg-teal-500  " : "hover:bg-teal-500  "
              }`}
              onClick={() => {
                setNumber(1);
              }}
            >
              <div
                className={` ${
                  number === 1 ? " text-white" : ""
                } hover:text-white`}
              >
                About
              </div>
            </div>{" "}
          </Link>
        </div>
        <div className=" basis-auto">
          <Link href="/Projects">
            <div
              className={`p-2 cursor-pointer rounded-full text-center mx-1 ${
                number === 2 ? "bg-teal-500 " : "hover:bg-teal-500 "
              }`}
              onClick={() => {
                setNumber(2);
              }}
            >
              <div
                className={` ${
                  number === 2 ? " text-white" : ""
                } hover:text-white`}
              >
                {" "}
                Projects
              </div>
            </div>
          </Link>
        </div>
        <div className=" basis-auto">
          <Link href="/Contact">
            <div
              className={`p-2 cursor-pointer rounded-full text-center mx-1 ${
                number === 3 ? "bg-teal-500" : "hover:bg-teal-500"
              }`}
              onClick={() => {
                setNumber(3);
              }}
            >
              <div
                className={` ${
                  number === 3 ? " text-white" : ""
                } hover:text-white`}
              >
                Contact
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
