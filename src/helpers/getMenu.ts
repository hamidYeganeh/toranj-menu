import { menu } from "@/menu";

export const MittagsmenuKey = "Mittagsmenü";

export function getMenuList(category: string | null) {
  if (!!category) {
    return menu.filter((menuItem) => menuItem.category === category);
  } else {
    return menu;
  }
}
export function getMenuCategories() {
  function moveToFirst(array: string[], word: string) {
    return [word, ...array.filter((item) => item !== word)];
  }

  return moveToFirst(
    [...new Set(menu.map(({ category }) => category))],
    MittagsmenuKey
  );
}

export function getMenuItemImage(src: string | null) {
  const defaultImage = "Toranj Februar 2024-54.jpg";
  return `/images/menu/${!!src ? src : defaultImage}`;
}
