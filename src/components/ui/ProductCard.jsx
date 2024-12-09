import React from "react";
import { CiHeart } from "react-icons/ci";
import img1 from "../../../public/file (1).png";
import Image from "next/image";
function ProductCard({ width, height }) {
  return (
    <div className="w-full md:w-60 md:h-64 p-2 rounded-md ">
      <div className="bg-[#F8F6F4] p-2 rounded-md">
        <div className="flex justify-between items-center">
          <CiHeart className="text-xl" />
          <div className="bg-white py-[2px] text-center px-2 text-[0.5rem] uppercase rounded-md">
            Art de la table
          </div>
        </div>

        <div>
          <Image src={img1} width={200} height={200} />
        </div>
      </div>

      <div className="flex flex-col  p-2">
        <div className="flex justify-between items-center text-xl">
          <h4>Title</h4>
          <p>
            0<sup>€</sup>
          </p>
        </div>
        <div className="flex justify-between items-center text-[0.5rem] text-gray-100">
          0,35€/Pièce · RÉF : VABGN5
          <div className="bg-[#F1F4F6] py-[2px] text-center px-2 text-[0.5rem] text-[#546A7D] uppercase rounded-md">
            20 pièces
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
