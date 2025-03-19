import { IFood } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import { MittagsmenuKey } from "@/helpers/getMenu";
import { cn } from "@/utils/cn";

interface ICategoryItemProps {
  categoryItem: IFood["category"];
  isActive: boolean;
}
export const CategoryItem: FC<ICategoryItemProps> = (props) => {
  const { categoryItem, isActive } = props;

  const isMittagsmenu = categoryItem === MittagsmenuKey;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full flex flex-row items-center justify-evenly">
        <motion.div
          animate={isActive ? "visible" : "hidden"}
          variants={{
            visible: {
              x: 0,
              visibility: "visible",
            },
            hidden: {
              x: -50,
              visibility: "hidden",
            },
          }}
        >
          <Image
            src={"/images/title-side.svg"}
            alt="Title Side"
            width={32}
            height={32}
            className="size-8"
          />
        </motion.div>
        <div>
          <h3
            className={cn("text-3xl text-black font-normal text-center", {
              "text-primary-main": isMittagsmenu,
            })}
          >
            {categoryItem}
          </h3>
        </div>
        <motion.div
          animate={isActive ? "visible" : "hidden"}
          variants={{
            visible: {
              x: 0,
              visibility: "visible",
            },
            hidden: {
              x: 50,
              visibility: "hidden",
            },
          }}
        >
          <Image
            src={"/images/title-side.svg"}
            alt="Title Side"
            width={32}
            height={32}
            className="size-8 rotate-180"
          />
        </motion.div>
      </div>
    </div>
  );
};
