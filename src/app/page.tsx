import Image from "next/image";
import { Inter } from "next/font/google";
import { Content, Header } from "./home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-[80%] min-h-screen mx-auto ">
        <div className="flex flex-col">
          <div className="flex-1">
            <Header />
          </div>
          <div className="flex-1">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
}
