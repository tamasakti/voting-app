import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { Button } from "src/components";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function Header() {
  return (
    <div className="flex flex-col p-10 ">
      <div>
        <h1 className={`${inter.className} text-center text-4xl font-bold`}>
          Ayo Mulai Voting
        </h1>
      </div>
      <div className="mt-5 text-center">
        <h4
          className={`${inter.className} p-2 bg-zinc-100 w-3/12 mx-auto font-normal`}
        >
          Web Voting No.1 Indonesia
        </h4>
      </div>
      <div className="mx-auto mt-8 ">
        <Image
          src="/asset/header.png"
          alt="Header-Image"
          width={274}
          height={243}
        />
      </div>
      <div className="flex flex-row w-[60%] mx-auto mt-10">
        <div className="flex justify-center flex-1 ">
          <Link href="/buatVoting">
            <button
              className={`${inter.className} p-3 px-5 py-3 text-white bg-black btn font-semibold hover:bg-white hover:text-black hover:border-black hover:border-[2px]`}
            >
              Buat Vote Baru
            </button>
          </Link>
        </div>
        <div className="flex justify-center flex-1 ">
          <button
            className={`${inter.className} p-3 px-6 py-3 text-black bg-white border-[2px] border-black btn font-semibold hover:bg-black hover:text-white`}
          >
            Ikutan Vote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
