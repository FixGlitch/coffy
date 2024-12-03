"use client";

import React from "react";
import { topSellingProducts } from "@/features/dashboard/constants/top-shelling-products";
import ProductCard from "./card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductList = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {topSellingProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              key={product.id}
              imageUrl={product.image}
              productName={product.name}
              category={product.category}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductList;
