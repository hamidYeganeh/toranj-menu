"use  client";

import { IFood } from "@/types";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { createContext, FC, PropsWithChildren, useState } from "react";

interface IMenuContext {
  selectedItem: null | IFood["code"];
  onSelectItem: (code: IFood["code"] | null) => void;
}

export const MenuItemContext = createContext<IMenuContext>({
  selectedItem: null,
  onSelectItem: (code) => {},
});

export const MenuItemContextProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const [selectedItem, setSelectedItem] =
    useState<IMenuContext["selectedItem"]>(null);

  function handleSelectItem(code: IMenuContext["selectedItem"]) {
    setSelectedItem(code);
  }

  return (
    <MenuItemContext.Provider
      value={{
        selectedItem,
        onSelectItem: handleSelectItem,
      }}
    >
      {children}
    </MenuItemContext.Provider>
  );
};
