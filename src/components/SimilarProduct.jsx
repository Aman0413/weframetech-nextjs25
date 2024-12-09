import React from "react";
import ProductCard from "./ui/ProductCard";

function SimilarProduct() {
  return (
    <div className="bg-[#FBF9F8] container p-4 flex flex-col justify-center">
      <div className="flex justify-between items-center">
        <h3 className="text-sm md:text-xl">Articles similaires</h3>
        <p className="text-xs md:text-sm text-[#393939] underline uppercase">
          Voir toute la collection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 p-4">
        <ProductCard width={"240px"} height={"256px"} />
        <ProductCard width={"240px"} height={"256px"} />
        <ProductCard width={"240px"} height={"256px"} />
        <ProductCard width={"240px"} height={"256px"} />
      </div>

      <div className="flex justify-between items-center my-14">
        <h3 className="text-sm md:text-xl">
          Ces produits pourraient vous intéresser Voir toute la collection
        </h3>
        <p className="text-xs md:text-sm text-[#393939] underline uppercase">
          Voir toute la collection
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:h-80 ">
        <ProductCard width={"320px"} height={"256px"} />
        <ProductCard width={"320px"} height={"256px"} />
        <ProductCard width={"320px"} height={"256px"} />
        <ProductCard width={"320px"} height={"256px"} />
      </div>
    </div>
  );
}

export default SimilarProduct;
