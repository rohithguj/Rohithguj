import Image from "next/image";
import { ButtonProps } from "./Types/btn";

export default function Home() {
  return (
    <>
      <Nav />
    </>
  );
}

function Nav() {
  return (
    <div className="absolute inset-x-0 top-0 bg-purple-900/20 backdrop-filter backdrop-blur-lg">
      <div className="h-full flex justify-end items-center px-4 ">
        <NavBtn color="text-purple-600" buttonText="Home" />
        <NavBtn color="text-purple-600" buttonText="Work" />
        <NavBtn color="text-purple-600" buttonText="Projects" />
        <NavBtn color="text-purple-600" buttonText="Certification" />
        <NavBtn color="text-purple-600" buttonText="Education" />
      </div>
    </div>
  );
}

function NavBtn({ color, bgColor, buttonText }: ButtonProps) {
  return (
    <button
      className={`${color} ${bgColor} font-semibold px-4 py-4 rounded hover:text-purple-700 hover:shadow-md hover:bg-purple-700/20`}
    >
      {buttonText}
    </button>
  );
}
