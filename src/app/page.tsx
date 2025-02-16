"use client";

import { Food } from "@/components/Food";
import { Sheet, SheetsProvider } from "@/components/Sheet";
import { menu } from "@/menu";
import { FreeMode, Grid, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/grid";
import { MenuLayoutProvider } from "@/context/MenuLayoutContext";

export default function Home() {
  function getMenuItems() {
    function chunkByLimit(chunkSize: number = 10) {
      return menu.slice(0, chunkSize);
    }
    return chunkByLimit(9);
  }
  const menuList = getMenuItems();
  return (
    <main className="w-full h-dvh bg-slate-800">
      <SheetsProvider>
        <Sheet>
          <div className="w-full h-full grid grid-cols-2 gap-4 p-4 overflow-y-scroll">
            <Food food={menu[0]} />
            <Food food={menu[2]} />
            <Food food={menu[4]} />
            <Food food={menu[6]} />
            <Food food={menu[8]} />
            <Food food={menu[0]} />
            <Food food={menu[2]} />
            <Food food={menu[4]} />
            <Food food={menu[6]} />
            <Food food={menu[8]} />
            <Food food={menu[0]} />
          </div>
        </Sheet>
      </SheetsProvider>
    </main>
  );
}
