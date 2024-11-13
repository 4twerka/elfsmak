import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="bg-black py-4 shadow-lg font-serif">
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link
            to="/"
            className="text-white text-3xl font-extrabold tracking-wider"
          >
            ElfSmak
          </Link>

          <div className="block lg:hidden">
            <button
              onClick={toggleModal}
              className="text-white text-3xl focus:outline-none"
            >
              &#x2022;&#x2022;&#x2022;
            </button>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex space-x-8 text-white text-lg font-semibold">
              <li className="hover:text-blue-400 transition duration-300 ease-in-out cursor-pointer">
                <Link to="/">Товари</Link>
              </li>
              <li className="hover:text-blue-400 transition duration-300 ease-in-out cursor-pointer">
                <Link to="/src/footer/">Наші контакти</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Модальне вікно для мобільних пристроїв */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-64">
            <button
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={toggleModal}
            >
              &times; 
            </button>
            <ul className="space-y-4 text-black text-lg text-center">
              <li className="hover:text-blue-400">
                <Link to="/" onClick={toggleModal}>
                  Товари
                </Link>
              </li>
              <li className="hover:text-blue-400">
                <Link to="/src/footer/" onClick={toggleModal}>
                  Наші контакти
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
