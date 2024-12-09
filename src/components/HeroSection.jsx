import Image from "next/image";
import React from "react";
import img1 from "../../public/file.png";
import { CiHeart } from "react-icons/ci";
import { TfiRulerAlt } from "react-icons/tfi";
import { PiPlanetThin } from "react-icons/pi";
import { PiPlus, PiMinus } from "react-icons/pi";

function HeroSection() {
  return (
    <div className="container p-4 border-t-0.6">
      <div className="">
        <div className="flex  w-36 text-sm justify-between ml-5">
          <span>Home</span>
          <span>.</span>
          <span className="text-gray-500">Art de la table</span>
        </div>
      </div>

      <div className="mt-3 flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="bg-[#F8F6F4] w-full md:w-[48%] h-96 p-6 rounded-md flex justify-center items-center border-black border">
          <Image src={img1} width={350} height={350} />
        </div>

        <div className=" w-full md:w-[48%] h-96 p-6 rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-sm md:text-xl">
              Cheese – appareil à raclette 1/2 roue
            </h3>
            <CiHeart className="text-xl cursor-pointer" />
          </div>
          <span className="text-xl">
            39,50€ <span className="text-gray-100 text-xs ">/pièce</span>
          </span>

          <div className="flex justify-between mt-3 items-center p-4 border-gray-500 border-t-0.6 border-b-0.6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-2">
                <TfiRulerAlt />
                <span>
                  20<sup className="font-thin">cm</sup>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PiPlanetThin />
                <span>
                  50<sup className="font-thin">cm</sup>
                </span>
              </div>
            </div>

            <div className="text-xs text-gray-100">RÉF : VABGN5</div>
          </div>

          <div className="mt-3 text-xs w-full md:w-[50%] text-start flex flex-col justify-start space-y-5 text-[#5D5D5D]">
            <p>
              Location appareil à raclette - Raclette traditionnelle 1/2 roue
              Réglable en hauteur Appareil à raclette professionnel Boîtier de
              chauffe horizontal réglable en hauteur
            </p>
            <p>220V 900W</p>
          </div>

          {/* horizontal line */}
          <div className="h-[0.6px] w-full bg-gray-500 mt-16 "></div>

          <div className="flex items-center space-x-2 my-2 cursor-pointer">
            <div className=" flex justify-between items-center w-[20%] p-2 rounded-md border">
              <PiPlus />
              <span>1</span>
              <PiMinus />
            </div>
            <div className="w-[80%]">
              <button className="w-full bg-[#5CD2DD] p-3 rounded-md text-white uppercase text-sm">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center mt-4">
        <div className=" w-[98%] flex flex-col md:flex-row items-center justify-center gap-6  p-3 rounded-md">
          <div className="w-full md:w-[48%]">
            <h3 className="">Description produit</h3>
            <p className="text-gray-100 text-xs mt-2">
              Festi vous propose à la location un/une "Jewel – grand
              couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce
              (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou
              du personnel, ce produit a fait l'objet d'une sélection rigoureuse
              par notre équipe. Il est en location chez nous sous la référence
              "VAJGC". Nous sommes à votre disposition pour que les événements
              de nos clients, même en last-minute, soient toujours une réussite.
              Vous pourrez trouver tout une série d'autre produit à louer de ce
              type dans la catégorie "Art de la Table".
            </p>
          </div>

          <div className="w-full md:w-[48%] bg-light-cream p-2 rounded-md text-[#393939] text-sm">
            <div className="flex justify-between items-center p-3">
              <span>Livraisons</span>
              <PiPlus />
            </div>
            <div className="flex justify-between items-center p-3">
              <span>Questions</span>
              <PiPlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
