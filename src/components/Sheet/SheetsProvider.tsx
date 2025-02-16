"use client";

import React, { FC, PropsWithChildren } from "react";
import { EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Sheet } from "./Sheet";

interface ISheetProvider extends PropsWithChildren {}

export const SheetsProvider: FC<ISheetProvider> = (props) => {
  const { children } = props;
  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[EffectCreative]}
      className="w-full h-dvh"
    >
      {React.Children.toArray(children).map((InnerChildren, childIndex) => (
        <SwiperSlide key={childIndex}>{InnerChildren}</SwiperSlide>
      ))}
      <Sheet />
    </Swiper>
  );
};
