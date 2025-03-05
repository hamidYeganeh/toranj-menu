import { menu } from "@/menu";

export function getMenuList(category: string | null) {
  if (!!category) {
    return menu.filter((menuItem) => menuItem.category === category);
  } else {
    return menu;
  }
}
export function getMenuCategories() {
  return [...new Set(menu.map(({ category }) => category))];
}
