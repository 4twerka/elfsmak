import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 p-4 font-serif"
      id="pointoftp"
    >
      <Link
        to="/pod"
        className="text-white text-2xl md:text-5xl font-bold m-4 p-8 w-full max-w-2xl rounded-lg bg-black bg-opacity-60 shadow-lg transition duration-500 transform hover:scale-105 hover:bg-opacity-80 cursor-pointer"
      >
        Поди
      </Link>

      <Link
        to="/liquid"
        className="text-white text-2xl md:text-5xl font-bold m-4 p-8 w-full max-w-2xl rounded-lg bg-black bg-opacity-60 shadow-lg transition duration-500 transform hover:scale-105 hover:bg-opacity-80 cursor-pointer"
      >
        Жижі
      </Link>

      <Link
        to="/cartridge"
        className="text-white text-2xl md:text-5xl font-bold m-4 p-8 w-full max-w-2xl rounded-lg bg-black bg-opacity-60 shadow-lg transition duration-500 transform hover:scale-105 hover:bg-opacity-80 cursor-pointer"
      >
        Картриджі
      </Link>
    </div>
  );
}

export default Main;
