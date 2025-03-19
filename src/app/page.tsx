"use client";

import { CategoryItem } from "@/components/CategoryItem";
import { Column } from "@/components/Column";
import { MainLayout } from "@/components/MainLayout";
import { MenuItem } from "@/components/MenuItem";
import { getMenuCategories, getMenuList } from "@/helpers/getMenu";
import Image from "next/image";
import { MenuItemContextProvider } from "@/context/MenuItemContext";
import { MenuItemModal } from "@/components/MenuItemModal";
import { useMemo, useRef, useState } from "react";
import { IFood } from "@/types";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

export default function Home() {
  // const [isFirstScreen, setIsFirstScreen] = useState(true);
  const menuListSwiper = useRef<SwiperRef>(null);
  const categoriesListSwiper = useRef<SwiperRef>(null);
  const [category, setCategory] = useState<IFood["category"] | null>(null);

  const menuList = useMemo(() => {
    return getMenuList(category);
  }, [category]);
  const categoriesList = getMenuCategories();
  const isCategorySelected = (selectedCategory: typeof category) =>
    selectedCategory === category;

  function handleSelectCategory(newCategory: typeof category) {
    setCategory(newCategory);
  }
  // function handleCloseFirstScreen() {
  //   setIsFirstScreen(false);
  // }

  return (
    <>
      {/* <motion.div
        onClick={handleCloseFirstScreen}
        className="w-full h-dvh fixed inset-0 m-auto z-[99999999]"
        variants={{ visible: { y: 0 }, hidden: { y: "-100dvh" } }}
        animate={isFirstScreen ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-full relative">
          <video
            className="w-full h-full object-cover z-10"
            autoPlay
            muted
            loop
          >
            <source
              src="https://spexup.arvanvod.ir/OqrPLZb1pY/mvGbQEbQWE/origin_FlB9qmDlsQwlybLOQorL93Nv6w9oyU8Og3yi6nj9.mp4"
              type="video/MP4"
            />
          </video>
          <div className="absolute inset-0 m-auto bg-black/60 z-40"></div>

          <div className="absolute inset-0 m-auto z-50 flex items-center justify-center">
            <h1
              className={cn(
                "text-8xl font-normal mix-blend-difference text-white"
              )}
            >
              {"Toranj Restaurant"}
            </h1>
          </div>
        </div>
      </motion.div> */}
      <MenuItemContextProvider>
        <MenuItemModal />
        <MainLayout>
          <div className="w-full h-full flex flex-col">
            <div className="w-full flex items-center justify-between flex-col gap-6">
              <Image
                src={"/images/logo-border.svg"}
                alt="LOGO BORDER"
                width={191}
                height={103}
                className="w-64 aspect-auto object-contain"
              />
              <Image
                src={"/images/logo.svg"}
                alt="LOGO"
                width={92}
                height={31}
                className="w-48 aspect-auto object-contain"
              />
              <Image
                src={"/images/logo-border.svg"}
                alt="LOGO BORDER"
                width={191}
                height={103}
                className="w-64 aspect-auto object-contain rotate-180"
              />
            </div>

            <div className="w-full h-full grid grid-cols-12">
              <Column
                colSpan="4"
                title="Kategorien"
                onNext={() => {
                  if (categoriesListSwiper.current)
                    categoriesListSwiper.current?.swiper.slideNext();
                }}
                onPrev={() => {
                  if (categoriesListSwiper.current)
                    categoriesListSwiper.current?.swiper.slidePrev();
                }}
              >
                <div id="categories-list-wrapper" className="w-full h-full">
                  <Swiper
                    ref={categoriesListSwiper}
                    direction={"vertical"}
                    grabCursor
                    mousewheel
                    className="w-full h-[calc(12*(40*4px))]"
                    slidesPerView={12}
                  >
                    {categoriesList.map((categoryItem, categoryItemIndex) => (
                      <SwiperSlide key={categoryItem} className="h-fit">
                        <div className="w-full min-h-40 h-fit">
                          <div
                            key={categoryItemIndex}
                            className="w-full h-40"
                            onClick={() => {
                              if (isCategorySelected(categoryItem)) {
                                handleSelectCategory(null);
                              } else {
                                handleSelectCategory(categoryItem);
                              }
                            }}
                          >
                            <CategoryItem
                              categoryItem={categoryItem}
                              isActive={isCategorySelected(categoryItem)}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Column>

              <div className="col-span-1 flex items-center justify-center pt-32 pb-12">
                <div className="w-1 h-full rounded-lg bg-secondary-main" />
              </div>

              <Column
                colSpan="8"
                title="Esswaren"
                onNext={() => {
                  if (menuListSwiper.current)
                    menuListSwiper.current?.swiper.slideNext();
                }}
                onPrev={() => {
                  if (menuListSwiper.current)
                    menuListSwiper.current?.swiper.slidePrev();
                }}
              >
                <div id="menu-list-wrapper" className="w-full h-full">
                  <Swiper
                    ref={menuListSwiper}
                    direction={"vertical"}
                    grabCursor
                    className="w-full h-[calc(12*(40*4px))]"
                    slidesPerView={12}
                  >
                    {menuList.map((menuItem, menuItemIndex) => (
                      <SwiperSlide key={menuItem.code} className="h-fit">
                        <motion.div
                          key={menuItemIndex}
                          layout
                          animate={"visible"}
                          initial={"hidden"}
                          variants={{
                            visible: { y: 0 },
                            hidden: {
                              y: -150,
                            },
                          }}
                          transition={{ delay: menuItemIndex * 0.02 }}
                          className="w-full min-h-40 h-fit"
                        >
                          <MenuItem menuItem={menuItem} />
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Column>
            </div>
          </div>
        </MainLayout>
      </MenuItemContextProvider>
    </>
  );
}
