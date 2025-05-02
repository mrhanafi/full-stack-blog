import React from "react";
import Image from "../components/Image";
import { Link } from "react-router";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-green-500">John Labu</Link>
            <span>on</span>
            <Link className="text-green-500">Web Design</Link>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            dolores provident odio quibusdam assumenda. Error eos inventore enim
            ut quasi laudantium suscipit perferendis velit, eum, impedit sed
            reprehenderit alias incidunt.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src={"postImg.jpeg"} w={600} className={"rounded-2xl"} />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex,
            omnis libero hic possimus impedit, nam aliquid consequuntur
            asperiores rem vel delectus officiis eius in sed quisquam placeat.
            Vitae, repellendus? Sit sapiente beatae, maiores iure unde libero
            eaque voluptatum sequi labore itaque id dolorem accusantium aliquid
            harum! Magni sint ex laborum consectetur cupiditate doloremque
            provident ducimus id harum, facere ab. Repudiandae labore tenetur
            dolorum facere expedita qui repellendus tempora molestias. Cum
            incidunt alias repellendus error laudantium saepe consequatur non
            quasi et, reiciendis velit aliquam eos rerum debitis voluptates
            iusto nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex,
            omnis libero hic possimus impedit, nam aliquid consequuntur
            asperiores rem vel delectus officiis eius in sed quisquam placeat.
            Vitae, repellendus? Sit sapiente beatae, maiores iure unde libero
            eaque voluptatum sequi labore itaque id dolorem accusantium aliquid
            harum! Magni sint ex laborum consectetur cupiditate doloremque
            provident ducimus id harum, facere ab. Repudiandae labore tenetur
            dolorum facere expedita qui repellendus tempora molestias. Cum
            incidunt alias repellendus error laudantium saepe consequatur non
            quasi et, reiciendis velit aliquam eos rerum debitis voluptates
            iusto nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex,
            omnis libero hic possimus impedit, nam aliquid consequuntur
            asperiores rem vel delectus officiis eius in sed quisquam placeat.
            Vitae, repellendus? Sit sapiente beatae, maiores iure unde libero
            eaque voluptatum sequi labore itaque id dolorem accusantium aliquid
            harum! Magni sint ex laborum consectetur cupiditate doloremque
            provident ducimus id harum, facere ab. Repudiandae labore tenetur
            dolorum facere expedita qui repellendus tempora molestias. Cum
            incidunt alias repellendus error laudantium saepe consequatur non
            quasi et, reiciendis velit aliquam eos rerum debitis voluptates
            iusto nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex,
            omnis libero hic possimus impedit, nam aliquid consequuntur
            asperiores rem vel delectus officiis eius in sed quisquam placeat.
            Vitae, repellendus? Sit sapiente beatae, maiores iure unde libero
            eaque voluptatum sequi labore itaque id dolorem accusantium aliquid
            harum! Magni sint ex laborum consectetur cupiditate doloremque
            provident ducimus id harum, facere ab. Repudiandae labore tenetur
            dolorum facere expedita qui repellendus tempora molestias. Cum
            incidunt alias repellendus error laudantium saepe consequatur non
            quasi et, reiciendis velit aliquam eos rerum debitis voluptates
            iusto nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex,
            omnis libero hic possimus impedit, nam aliquid consequuntur
            asperiores rem vel delectus officiis eius in sed quisquam placeat.
            Vitae, repellendus? Sit sapiente beatae, maiores iure unde libero
            eaque voluptatum sequi labore itaque id dolorem accusantium aliquid
            harum! Magni sint ex laborum consectetur cupiditate doloremque
            provident ducimus id harum, facere ab. Repudiandae labore tenetur
            dolorum facere expedita qui repellendus tempora molestias. Cum
            incidunt alias repellendus error laudantium saepe consequatur non
            quasi et, reiciendis velit aliquam eos rerum debitis voluptates
            iusto nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex,
            omnis libero hic possimus impedit, nam aliquid consequuntur
            asperiores rem vel delectus officiis eius in sed quisquam placeat.
            Vitae, repellendus? Sit sapiente beatae, maiores iure unde libero
            eaque voluptatum sequi labore itaque id dolorem accusantium aliquid
            harum! Magni sint ex laborum consectetur cupiditate doloremque
            provident ducimus id harum, facere ab. Repudiandae labore tenetur
            dolorum facere expedita qui repellendus tempora molestias. Cum
            incidunt alias repellendus error laudantium saepe consequatur non
            quasi et, reiciendis velit aliquam eos rerum debitis voluptates
            iusto nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex,
            omnis libero hic possimus impedit, nam aliquid consequuntur
            asperiores rem vel delectus officiis eius in sed quisquam placeat.
            Vitae, repellendus? Sit sapiente beatae, maiores iure unde libero
            eaque voluptatum sequi labore itaque id dolorem accusantium aliquid
            harum! Magni sint ex laborum consectetur cupiditate doloremque
            provident ducimus id harum, facere ab. Repudiandae labore tenetur
            dolorum facere expedita qui repellendus tempora molestias. Cum
            incidunt alias repellendus error laudantium saepe consequatur non
            quasi et, reiciendis velit aliquam eos rerum debitis voluptates
            iusto nam.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src={"userImg.jpeg"}
                className={"w-12 h-12 rounded-full object-cover"}
                w={48}
                h={48}
              />
              <Link className="text-green-500">John Labu</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src={"facebook.svg"} />
              </Link>
              <Link>
                <Image src={"instagram.svg"} />
              </Link>
            </div>
          </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to={"/"}>
              All
            </Link>
            <Link className="underline" to={"/"}>
              Web Design
            </Link>
            <Link className="underline" to={"/"}>
              Development
            </Link>
            <Link className="underline" to={"/"}>
              Databases
            </Link>
            <Link className="underline" to={"/"}>
              Search Engines
            </Link>
            <Link className="underline" to={"/"}>
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
