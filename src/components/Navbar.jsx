import React, { useState } from "react";
import { IKImage } from "imagekitio-react";
import Image from "./Image";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to={"/"} className="flex items-center gap-4 text-2xl font-bold">
        <Image src={"/namel (1).png"} alt={"Namel Logo"} w={32} h={32} />
        <span>namelblog.</span>
      </Link>
      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Mobile Button */}
        <div className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
          {open ? "X" : "☰"}
        </div>
        {/* Mobile Link List */}
        <div
          className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 transition-all ease-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/"}>Trending</Link>
          <Link to={"/"}>Most Popular</Link>
          <Link to={"/"}>About</Link>
          <Link to={"/"}>
            <button className="py-2 px-4 rounded-3xl bg-green-800 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Trending</Link>
        <Link to={"/"}>Most Popular</Link>
        <Link to={"/"}>About</Link>

        <SignedOut>
          {/* <SignInButton /> */}
          <Link to={"/login"}>
            <button className="py-2 px-4 rounded-3xl bg-green-800 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
