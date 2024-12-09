import React from "react";
import logo from "../../public/Group.png";
import Image from "next/image";
import { GoLightBulb } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="container p-4 ">
      <div className="flex my-6">
        <div className="flex  items-center space-x-3 w-full ">
          <div>
            <Image src={logo} alt="logo" height={100} width={100} />
          </div>

          <input
            type="text"
            placeholder="Rechercher un produit"
            className="bg-[#F9FAFB] w-[70%]  p-3 rounded-md text-sm focus:outline-none"
          />
        </div>

        <div className="hidden w-[50%] md:flex justify-between items-center space-x-8 ">
          <div className="flex items-center gap-1 justify-center">
            <GoLightBulb className="text-gray-100" />
            Inspirations
          </div>
          <div className="flex items-center gap-1 justify-center  w-full">
            <CiHeart className="text-gray-100" />
            Mes favoris
          </div>

          <span className="bg-[#EAEDEE] rounded-full  text-center p-[3px] text-xs ">
            24
          </span>
          <button className="flex items-center bg-[#0093D0] text-white  px-3 py-2 rounded justify-center gap-1">
            <IoCartOutline className=" font-bold text-white " />
            Panier
          </button>

          <div className="bg-[#EAEDEE] w-8 h-8 rounded-full"></div>

          <div className="flex  items-center text-xs">
            FR
            <MdKeyboardArrowDown className="text-sm" />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="flex justify-between items-center text-xs text-[#5D5D5D] uppercase">
          <li className="text-[#0093D0] font-semibold">Art de la table</li>
          <li>Mobilier</li>
          <li>Nappage</li>
          <li>Matériel de salle</li>
          <li>Cuisine</li>
          <li>Barbecue </li>
          <li>Tente</li>
          <li>Chauffage</li>
          <li>Podium - Piste de danse</li>
          <li>Son et lumière</li>
          <li>Packs</li>
          <li> Consommables</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
