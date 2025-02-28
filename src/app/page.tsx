"use client";

import { CategoryItem } from "@/components/CategoryItem";
import { Column } from "@/components/Column";
import { MainLayout } from "@/components/MainLayout";
import { MenuItem } from "@/components/MenuItem";
import { getMenuCategories, getMenuList } from "@/helpers/getMenu";

export default function Home() {
  const menuList = getMenuList();
  const categoriesList = getMenuCategories();
  return (
    <MainLayout>
      <div className="w-[calc(100%-48px)] mx-auto flex flex-col items-start min-h-[calc(100dvh-48*4px)]">
        <div className="w-96 h-48 mx-auto my-12 bg-green-700"></div>

        <div className="grid grid-cols-12 w-full h-full gap-4">
          <Column title="Kategorien" colSpan="4">
            <div className="w-full flex flex-col gap-[calc(18*4px)] py-4 px-8">
              {categoriesList.map((categoryItem, categoryItemIndex) => (
                <CategoryItem
                  key={categoryItemIndex}
                  categoryItem={categoryItem}
                />
              ))}
            </div>
          </Column>
          <Column title="Kategorien" colSpan="8" withBorder>
            <div className="w-full flex flex-col gap-[calc(18*4px)] py-4 px-8">
              {menuList.map((menuItem, menuItemIndex) => (
                <MenuItem key={menuItemIndex} menuItem={menuItem} />
              ))}
            </div>
          </Column>
        </div>
      </div>
    </MainLayout>
  );
}
