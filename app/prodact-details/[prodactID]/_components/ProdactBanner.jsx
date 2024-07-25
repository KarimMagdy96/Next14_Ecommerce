import Image from "next/image";
import React from "react";

const ProdactBanner = ({ product }) => {
  return (
    <div className=" flex justify-center">
      <Image
        src={product?.attributes?.img?.data?.attributes?.url}
        width={400}
        height={400}
        alt=""
        n
        className=" h-[16rem] md:h-[23rem] border p-2 border-teal-600 shadow-lg  rounded-lg "
      />
    </div>
  );
};
export default ProdactBanner;
