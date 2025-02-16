"use client";

import { Food } from "@/components/Food";
import { Sheet, SheetsProvider } from "@/components/Sheet";
import { menu } from "@/menu";

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
          <div className="w-full h-fit max-h-full grid grid-cols-2 gap-4 p-4 overflow-y-scroll">
            <Food food={menu[0]} />
            <Food food={menu[1]} />
            <Food food={menu[2]} />
            <Food food={menu[3]} />
            <Food food={menu[4]} />
            <Food food={menu[5]} />
            <Food food={menu[6]} />
            <Food food={menu[7]} />
            <Food food={menu[8]} />
            <Food food={menu[9]} />
            <Food food={menu[10]} />
            <Food food={menu[11]} />
          </div>
        </Sheet>
        <Sheet>
          <div className="w-full h-fit max-h-full grid grid-cols-2 gap-4 p-4 overflow-y-scroll">
            <Food food={menu[12]} />
            <Food food={menu[13]} />
            <Food food={menu[14]} />
            <Food food={menu[15]} />
          </div>
        </Sheet>
      </SheetsProvider>
    </main>
  );
}
