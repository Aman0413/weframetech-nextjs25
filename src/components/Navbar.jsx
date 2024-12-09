import React from "react";
import logo from "../../public/Group.png";
import Image from "next/image";
import { GoLightBulb } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <nav
      className="container p-4 "
      style={{
        fontFamily: "Poppins",
      }}
    >
      {/* Top Bar */}
      <div className="flex my-6 items-center justify-between">
        {/* Logo and Search Bar */}
        <div className="flex items-center space-x-3 w-full md:w-[50%]">
          <Image src={logo} alt="logo" height={100} width={100} />
          <input
            type="text"
            placeholder="Rechercher un produit"
            className="bg-[#F9FAFB] w-[70%] p-3 rounded-md text-sm focus:outline-none"
          />
        </div>

        {/* Navigation and Icons */}
        <div className="hidden md:flex items-center w-[50%] space-x-8 justify-end">
          <div className="flex items-center gap-1 cursor-pointer">
            <GoLightBulb className="text-gray-500" />
            <span>Inspirations</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <CiHeart className="text-gray-500" />
            <span>Mes favoris</span>
          </div>
          <div className="bg-[#EAEDEE] rounded-full text-center px-2 text-xs">
            24
          </div>
          <button className="flex items-center bg-[#0093D0] text-white px-3 py-2 rounded gap-1">
            <IoCartOutline className="text-white" />
            <span>Panier</span>
          </button>
          <div className="bg-[#EAEDEE] w-8 h-8 rounded-full"></div>
          <div className="flex items-center text-xs cursor-pointer">
            FR
            <MdKeyboardArrowDown className="text-sm" />
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className="hidden md:block"
        style={{
          fontFamily: "Inter",
        }}
      >
        <ul className="flex justify-between items-center text-xs text-[#5D5D5D] uppercase">
          <li className="text-[#0093D0] font-semibold cursor-pointer">
            Art de la table
          </li>
          <li className="cursor-pointer">Mobilier</li>
          <li className="cursor-pointer">Nappage</li>
          <li className="cursor-pointer">Matériel de salle</li>
          <li className="cursor-pointer">Cuisine</li>
          <li className="cursor-pointer">Barbecue</li>
          <li className="cursor-pointer">Tente</li>
          <li className="cursor-pointer">Chauffage</li>
          <li className="cursor-pointer">Podium - Piste de danse</li>
          <li className="cursor-pointer">Son et lumière</li>
          <li className="cursor-pointer">Packs</li>
          <li className="cursor-pointer">Consommables</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
