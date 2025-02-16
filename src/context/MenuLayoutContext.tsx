"use client";

import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

export const MenuLayoutContext = createContext({
  selectedFoodCode: "",
  onSelectFood: (foodCode: string) => {},
});
export const MenuLayoutProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const [selectedFoodCode, setSelectedFoodCode] = useState<string>("");

  function handleOnSelectFood(foodCode: string) {
    setSelectedFoodCode(foodCode);
  }

  return (
    <MenuLayoutContext.Provider
      value={{
        selectedFoodCode,
        onSelectFood: handleOnSelectFood,
      }}
    >
      {children}
    </MenuLayoutContext.Provider>
  );
};

export const useMenuLayout = () => {
  const ctx = useContext(MenuLayoutContext);

  if (!ctx) return "useMenuLayout hook must be inside <MenuLayoutProvider>";

  return ctx;
};
