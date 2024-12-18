import React from "react";
import logo1 from "../../public/Groupe_25.png";
import logo2 from "../../public/Groupe 504.png";
import logo3 from "../../public/Groupe_56.png";
import logo4 from "../../public/Groupe_123.png";
import Image from "next/image";
import img1 from "../../public/BUFFET_037 1.png";
import { IoMdArrowForward } from "react-icons/io";

function BottomSection() {
  // logo data
  const logoData = [
    {
      id: 1,
      logo: logo1,
      title: "Livraison & Reprise",
      para: "Selon vos besoins",
    },
    {
      id: 2,
      logo: logo2,
      title: "Nettoyage",
      para: "Selon vos besoins",
    },
    {
      id: 3,
      logo: logo3,
      title: "Commande Illimitée",
      para: "Tout est possible",
    },
    {
      id: 4,
      logo: logo4,
      title: "Transport & Enlèvement",
      para: "On s’occupe de tout.",
    },
  ];

  return (
    <div
      className=" container p-4 bottom-section  flex flex-col justify-center items-center"
      style={{
        fontFamily: "Geist",
      }}
    >
      <div className="flex justify-center items-center flex-col py-12 ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-center my-2">
            On s’occupe de <span className="text-skyblue font-bold">tout</span>
          </h2>
          <p className="text-gray-500 text-sm text-center">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>

        <section className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
          {logoData.map((data, index) => {
            return (
              <>
                <div
                  key={data.id}
                  className=" p-2 flex flex-col justify-center items-center gap-1 "
                >
                  <Image src={data.logo} alt="logo" height={40} width={40} />
                  <h5>{data.title}</h5>
                  <p className="text-xs text-gray-100">{data.para}</p>
                </div>
                {index !== logoData.length - 1 && (
                  <div className="w-20 h-[1px] bg-gray-100"></div>
                )}
              </>
            );
          })}
        </section>
      </div>

      <section className="flex flex-col md:flex-row justify-center items-center w-full my-12  gap-6">
        <div className="w-full md:w-[48%]">
          <Image
            src={img1}
            alt="img1"
            width={550}
            height={100}
            className="rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="bg-[#FFF3F9] w-full  md:w-[48%] md:h-60  h-72 rounded-lg p-3 space-y-6 ">
          <h5 className="font-medium text-2xl ">
            S&apos;inscrire & éconnomiser{" "}
            <span className="text-skyblue">10%</span>
          </h5>
          <p className="text-gray-100 text-xs md:text-sm">
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity didn`&apos;t. Yet busy any
            meeting shark light marginalised 4-blocker message. Productize
            corporate nail caught synergy highlights lunch. Company another
            pushback items dear or any.
          </p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="john@doe.com"
              className="p-2 w-full rounded-md border focus:outline-none"
            />
            <button className="bg-skyblue text-white p-3 rounded-lg ml-2 flex justify-center items-center ">
              S&apos;inscrire
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BottomSection;
