import React from "react";
import logo1 from "../../public/Groupe_25.png";
import logo2 from "../../public/Groupe 504.png";
import logo3 from "../../public/Groupe_56.png";
import logo4 from "../../public/Groupe_123.png";
import Image from "next/image";

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
    <div className="container p-4 bottom-section flex justify-center items-center">
      <div className="flex justify-center items-center flex-col ">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl">
            On s’occupe de <span className="text-skyblue font-bold">tout</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
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
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
