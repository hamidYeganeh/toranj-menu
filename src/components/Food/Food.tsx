"use client";

import { IFood } from "@/types";
import { useFormatter } from "next-intl";
import Image from "next/image";
import { FC, useContext, useState } from "react";
import { motion } from "framer-motion";
import { MenuLayoutContext, useMenuLayout } from "@/context/MenuLayoutContext";
import { cn } from "@/utils/cn";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Pagination,
  Parallax,
  Thumbs,
} from "swiper/modules";

interface IFoodProps {
  food: IFood;
}
export const Food: FC<IFoodProps> = (props) => {
  const { food } = props;
  const formatter = useFormatter();
  const { onSelectFood, selectedFoodCode } = useContext(MenuLayoutContext);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isFoodSelected = selectedFoodCode === food.code;

  function handleSelectFood() {
    onSelectFood(food.code);
  }
  function handleUnselectFood() {
    onSelectFood("");
  }
  return (
    <>
      <div
        className={cn(
          "absolute inset-0 h-dvh w-dvw bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 m-auto p-8 transition-all duration-500 cursor-default",
          isFoodSelected ? "opacity-100 z-40" : "opacity-0 -z-50"
        )}
        onClick={handleUnselectFood}
      ></div>

      <motion.div
        layout
        layoutId={`food-${food.code}`}
        className={cn(
          "w-full h-fit relative",
          isFoodSelected
            ? "bg-white fixed inset-0 m-auto z-50 w-full max-w-screen-2xl h-[calc(100%-4px*24)] rounded-3xl shadow-2xl overflow-hidden"
            : "bg-transparent"
        )}
        onClick={handleSelectFood}
      >
        <motion.div
          className={cn(
            "w-full h-full p-8 bg-white cursor-default",
            isFoodSelected ? "block" : "hidden"
          )}
        >
          <div className="w-full h-full flex flex-row gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-full max-w-lg rounded-2xl aspect-square overflow-hidden flex">
                <Swiper
                  thumbs={{ swiper: thumbsSwiper }}
                  grabCursor={false}
                  pagination
                  navigation
                  spaceBetween={12}
                  slidesPerView={1}
                  modules={[Pagination, Navigation, Thumbs]}
                  onSlideChange={({ activeIndex }) =>
                    setActiveIndex(activeIndex)
                  }
                >
                  {food.images.map((foodImage, foodImageIndex) => (
                    <SwiperSlide key={foodImageIndex}>
                      <Image
                        src={foodImage}
                        alt={foodImage}
                        width={512}
                        height={512}
                        className="w-[512px] aspect-square object-cover rounded-2xl bg-slate-200"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* <div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  grabCursor={false}
                  spaceBetween={12}
                  watchSlidesProgress={true}
                  modules={[FreeMode]}
                >
                  {food.images.map((foodImage, foodImageIndex) => (
                    <SwiperSlide key={foodImageIndex}>
                      <Image
                        src={foodImage}
                        alt={foodImage}
                        width={36 * 4}
                        height={36 * 4}
                        className={cn(
                          "w-36 aspect-square object-cover rounded-2xl bg-slate-200"
                        )}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div> */}
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="text-xl font-medium">{`Code : ${food.code}`}</p>
              <h1 className="text-5xl font-bold">{food.name}</h1>
              <p className="text-xl font-medium">{`category : ${food.category}`}</p>
              <p className="text-xl font-medium">
                {`material : ${formatter.list(food.material.split(" "))}`}
              </p>
              <p className="text-2xl font-medium">{food.description}</p>
            </div>
          </div>
        </motion.div>
        <div
          className={cn(
            "w-full h-fit p-4 bg-blue-50 rounded-2xl flex flex-row items-stretch gap-2 relative cursor-pointer",
            { "opacity-0": isFoodSelected }
          )}
        >
          <div className="bg-emerald-200 rounded-xl overflow-hidden">
            <motion.img
              src={food.images[0]}
              alt={food.name}
              width={32 * 4}
              height={27 * 4}
              className="w-60 aspect-[4/3] object-cover"
              layoutId={`food-${food.code}-image`}
            />
          </div>
          <div className="flex flex-1 flex-col gap-2 justify-between">
            <div className="flex flex-1 flex-col gap-2">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="px-2 py-1 rounded-full bg-emerald-100 flex  items-center justify-center">
                  <p className="text-sm font-semibold text-emerald-950">
                    {food.code}
                  </p>
                </div>
                <div className="px-2 py-1 rounded-full border border-emerald-800 flex  items-center justify-center">
                  <p className="text-md font-medium m-0 text-emerald-800 uppercase">
                    {food.category}
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-emerald-950 line-clamp-1 capitalize">
                {food.name}
              </h3>
              <p className="text-sm font-normal line-clamp-2">
                {food.description}
              </p>
            </div>
            <p className="text-md font-semibold italic text-emerald-950">
              {formatter.number(food.price, {
                currency: "EUR",
                style: "currency",
              })}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
