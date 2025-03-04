"use client";

import { CategoryItem } from "@/components/CategoryItem";
import { Column } from "@/components/Column";
import { MainLayout } from "@/components/MainLayout";
import { MenuItem } from "@/components/MenuItem";
import { useKeenSlider } from "keen-slider/react";
import { getMenuCategories, getMenuList } from "@/helpers/getMenu";
import Image from "next/image";
import { MenuItemContextProvider } from "@/context/MenuItemContext";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { MenuItemModal } from "@/components/MenuItemModal";

export default function Home() {
  const [menuListRef, menuListInstance] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    vertical: true,
    slides: { perView: 12 },
  });
  const [categoriesListRef] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    vertical: true,
    slides: { perView: 12 },
  });

  const menuList = getMenuList();
  const categoriesList = getMenuCategories();

  return (
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
            <Column colSpan="4" title="Kategorien">
              <div id="categories-list-wrapper" className="w-full h-full">
                <div
                  ref={categoriesListRef}
                  className="w-full keen-slider h-[calc(12*(40*4px))]"
                >
                  {categoriesList.map((categoryItem, categoryItemIndex) => (
                    <div
                      key={categoryItemIndex}
                      className="w-full h-40 keen-slider__slide"
                    >
                      <CategoryItem categoryItem={categoryItem} />
                    </div>
                  ))}
                </div>
              </div>
            </Column>

            <div className="col-span-1 flex items-center justify-center pt-32 pb-12">
              <div className="w-1 h-full rounded-lg bg-secondary-main" />
            </div>

            <Column
              colSpan="8"
              title="Esswaren"
              onNext={() => {
                menuListInstance.current?.next();
              }}
              onPrev={() => {
                menuListInstance.current?.prev();
              }}
            >
              <div id="menu-list-wrapper" className="w-full h-full">
                <div
                  ref={menuListRef}
                  className="w-full keen-slider h-[calc(12*(40*4px))]"
                >
                  {menuList.map((menuItem, menuItemIndex) => (
                    <div
                      key={menuItemIndex}
                      className="w-full h-40 keen-slider__slide"
                    >
                      <MenuItem menuItem={menuItem} />
                    </div>
                  ))}
                </div>
              </div>
            </Column>
          </div>
        </div>
      </MainLayout>
    </MenuItemContextProvider>
  );
}
