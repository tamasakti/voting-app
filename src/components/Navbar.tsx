import React from "react";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
});

function Navbar() {
  return (
    <React.Fragment>
      <div className="w-[80%] mt-8 h-[5rem] mx-auto ">
        <div className="flex flex-row w-full h-full">
          <div className="flex items-center flex-1 ml-10 ">
            <h1
              className={`${ubuntu.className} bg-white p-3 font-semibold text-xl hover:bg-zinc-100 hover:cursor-pointer hover:p-3`}
            >
              Jujurly
            </h1>
          </div>
          <div className="flex items-center justify-end flex-1 mr-10 ">
            <button className="px-5 py-2 text-white bg-black btn hover:border-lg">
              Login
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
