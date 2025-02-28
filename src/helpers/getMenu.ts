import { menu } from "@/menu";

export function getMenuList() {
  return menu;
}
export function getMenuCategories() {
  return [...new Set(menu.map(({ category }) => category))];
}
