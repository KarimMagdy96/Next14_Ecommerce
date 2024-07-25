"use client";
import BreadCrumb from "@/app/_conponents/BreadCrumb";
import ProdactApi from "@/app/_utils/ProdactApi";
import React, { useEffect, useState } from "react";
import ProdactBanner from "./_components/ProdactBanner";
import ProdactInfo from "./_components/ProdactInfo";

function ProductDetails({ params }) {
  const [productDetails, setProductDetails] = useState({});
  const [similarProductList, setSimilarProductList] = useState({});
  useEffect(() => {
    getProductDetails();
  }, [params?.prodactID]);

  const getProductDetails = () => {
    ProdactApi.getProductDetails(params?.prodactID).then((res) => {
      console.log(res.data.data);
      setProductDetails(res.data.data);
      getProductByCategory(res.data.data);
    });
  };
  const getProductByCategory = (product) => {
    ProdactApi.getProductByCategory(product?.attributes?.Category).then(
      (res) => {
        console.log(res.data.data);
        setSimilarProductList(res.data.data);
      }
    );
  };
  return (
    <div className="px-10 py-8 md:px-28 ">
      <BreadCrumb />
      <div className=" mt-10 gap-14 grid grid-cols-1 md:grid-cols-2 lg:gap-0 ">
        <ProdactBanner product={productDetails} />
        <ProdactInfo product={productDetails} />
      </div>
      <h2>Similar Products</h2>
    </div>
  );
}

export default ProductDetails;
