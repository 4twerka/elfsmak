import React from "react";
import { Link } from "react-router-dom";
import image from "../../pictures/xros.png"

function Pod() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-full lg:max-w-6xl px-4">
        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-center">
          <img
            className="w-full h-48 sm:h-64 object-cover rounded-md"
            src={image}
            alt="Xros Mini"
          />
          <div className="text-lg sm:text-xl font-semibold mt-4 text-center">
            Поди
          </div>

          <Link
            to="/availability"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Наявність
          </Link>

          <Link
            to="/form"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Замовити
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pod;

