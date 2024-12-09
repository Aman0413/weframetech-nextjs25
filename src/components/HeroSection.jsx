import Image from "next/image";
import React from "react";
import img1 from "../../public/file.png";
import { CiHeart } from "react-icons/ci";
import { TfiRulerAlt } from "react-icons/tfi";
import { PiPlanetThin, PiPlus, PiMinus } from "react-icons/pi";

function HeroSection() {
  return (
    <div className="container p-4 border-t-0.6">
      {/*  Navigation */}
      <div className="">
        <div className="flex w-36 text-sm justify-between ml-5">
          <span>Home</span>
          <span>.</span>
          <span className="text-gray-500">Art de la table</span>
        </div>
      </div>

      {/* Main Section: Product Image and Details */}
      <div className="mt-3 flex flex-col md:flex-row items-center justify-center gap-2">
        <div className="bg-[#F8F6F4] w-full md:w-[48%] h-96 p-6 rounded-md flex justify-center items-center border-black border">
          <Image
            src={img1}
            width={350}
            height={350}
            alt="Cheese raclette appliance"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-[48%] h-96 p-6 rounded-md">
          <div className="flex justify-between items-center">
            <h3
              className="text-sm md:text-2xl"
              style={{
                fontFamily: "Playfair Display",
              }}
            >
              Cheese &ndash; appareil &agrave; raclette 1/2 roue
            </h3>
            <CiHeart className="text-xl cursor-pointer" />
          </div>
          {/* Price Section */}
          <span className="text-xl">
            39,50&euro; <span className="text-gray-100 text-xs ">/pièce</span>
          </span>

          {/* Product Dimensions and Reference */}
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

            {/* Product Reference */}
            <div className="text-xs text-gray-100">RÉF : VABGN5</div>
          </div>

          <div
            className="mt-3 text-xs w-full md:w-[50%] text-start flex flex-col justify-start space-y-5 text-[#5D5D5D]"
            style={{
              fontFamily: "Geist",
            }}
          >
            <p>
              Location appareil &agrave; raclette - Raclette traditionnelle 1/2
              roue Réglable en hauteur Appareil &agrave; raclette professionnel
              Boîtier de chauffe horizontal réglable en hauteur
            </p>
            <p>220V 900W</p>
          </div>

          {/* Divider */}
          <div className="h-[0.6px] w-full bg-gray-500 mt-16 "></div>

          {/* Quantity Selector and Add to Cart Button */}
          <div className="flex items-center space-x-2 my-2 cursor-pointer">
            <div className="flex justify-between items-center w-[20%] p-2 rounded-md border">
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
      <div className="w-full flex justify-center items-center mt-4">
        <div className="w-[98%] flex flex-col md:flex-row items-center justify-center gap-6 p-3 rounded-md">
          <div
            className="w-full md:w-[48%]"
            style={{
              fontFamily: "Geist",
            }}
          >
            <h3>Description produit</h3>
            <p className="text-gray-100 text-xs mt-2">
              Festi vous propose &agrave; la location un/une &quot;Jewelgrand
              couteau/10pc&quot; pour votre évenement et ce dès 0,35 &euro; /
              pièce (HTVA). Que ce soit pour votre mariage, une fête
              d&apos;anniversaire ou du personnel, ce produit a fait
              l&apos;objet d&apos;une sélection rigoureuse par notre équipe. Il
              est en location chez nous sous la référence &quot;VAJGC&quot;.
              Nous sommes &agrave; votre disposition pour que les événements de
              nos clients, même en last-minute, soient toujours une réussite.
              Vous pourrez trouver toute une série d&apos;autre produit &agrave;
              louer de ce type dans la catégorie &quot;Art de la Table&quot;.
            </p>
          </div>

          <div
            className="w-full md:w-[48%] bg-light-cream p-2 rounded-md text-[#393939] text-sm"
            style={{
              fontFamily: "Geist",
            }}
          >
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
