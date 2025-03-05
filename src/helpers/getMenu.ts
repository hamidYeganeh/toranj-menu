import { menu } from "@/menu";

export function getMenuList(category: string | null) {
  if (!!category) {
    console.log("#1");

    return menu.filter((menuItem) => menuItem.category === category);
  } else {
    console.log("#2");

    return menu;
  }
}
export function getMenuCategories() {
  return [...new Set(menu.map(({ category }) => category))];
}
