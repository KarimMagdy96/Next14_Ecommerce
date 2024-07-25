import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import React from "react";

const ProdactInfo = ({ product }) => {
  return (
    <div>
      <h2 className="text-[20px]">{product?.attributes?.title}</h2>
      <h2 className=" text-[15px] text-gray-400">
        {product?.attributes?.Category}
      </h2>
      <h2 className=" text-[15px] mt-5">
        {product?.attributes?.description[0]?.children[0]?.text}
      </h2>
      <h2 className=" text-[11px] text-gray-500 flex gap-2 justify-start items-center mt-2">
        {product?.attributes?.InstantDelivery ? (
          <BadgeCheck className=" text-green-700 h-5 w-5" />
        ) : (
          <AlertOctagon />
        )}
        Eligible for instant delivery
      </h2>
      <h2 className="text-[23px]  mt-3 text-teal-800 font-bold">
        ${product?.attributes?.price}
      </h2>
      <button className=" flex justify-center items-center gap-2  bg-teal-600 hover:bg-teal-700 rounded p-3 text-white mt-2">
        <ShoppingCart />
        Add To Cart
      </button>
    </div>
  );
};

export default ProdactInfo;
