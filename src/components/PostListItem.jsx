import React from "react";
import Image from "./Image";
import { Link } from "react-router";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src={"/postImg.jpeg"}
          className={"rounded-2xl object-cover"}
          w={800}
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={"/test"} className="text-4xl font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          necessitatibus repudiandae eius.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-green-800">John Doe</Link>
          <span>on</span>
          <Link className="text-green-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ad id
          eos veniam a debitis quibusdam magni sequi optio labore, nulla
          voluptatum, sunt quia. Fuga repellendus ad obcaecati animi sequi.
        </p>
        <Link to={"/test"} className="text-sm underline text-green-500">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
