"use client";

import React, { FC, PropsWithChildren, useContext } from "react";
import { EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Sheet } from "./Sheet";
import { MenuLayoutContext } from "@/context/MenuLayoutContext";

interface ISheetProvider extends PropsWithChildren {}

export const SheetsProvider: FC<ISheetProvider> = (props) => {
  const { children } = props;
  const { selectedFoodCode, onSelectFood } = useContext(MenuLayoutContext);
  const isAnyFoodSelected = selectedFoodCode !== "";

  function handleUnselectFood() {
    onSelectFood("");
  }

  return (
    <Swiper
      grabCursor={!isAnyFoodSelected}
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
      onSlideChange={() => {
        handleUnselectFood();
      }}
    >
      {React.Children.toArray(children).map((InnerChildren, childIndex) => (
        <SwiperSlide key={childIndex}>{InnerChildren}</SwiperSlide>
      ))}
      <Sheet />
    </Swiper>
  );
};
