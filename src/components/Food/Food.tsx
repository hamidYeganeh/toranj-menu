import { IFood } from "@/types";
import { useFormatter } from "next-intl";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
import { useMenuLayout } from "@/context/MenuLayoutContext";
import { cn } from "@/utils/cn";

interface IFoodProps {
  food: IFood;
}
export const Food: FC<IFoodProps> = (props) => {
  const { food } = props;
  const formatter = useFormatter();
  const {} = useMenuLayout();
  return (
    <motion.div
      layoutId={`food-${food.code}`}
      className={cn(
        "w-full h-fit p-4 border border-emerald-200 bg-blue-50 rounded-2xl flex flex-row items-stretch gap-2 relative",
        ""
      )}
    >
      <div className="bg-emerald-200 rounded-xl overflow-hidden">
        <motion.img
          src={food.images[0]}
          alt={food.name}
          width={32 * 4}
          height={27 * 4}
          className="w-60 aspect-[4/3] object-cover"
          layoutId={`food-${food.code}-image`}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 justify-between">
        <div className="flex flex-1 flex-col gap-2">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="px-2 py-1 rounded-full bg-emerald-100 flex  items-center justify-center">
              <p className="text-sm font-semibold text-emerald-950">
                {food.code}
              </p>
            </div>
            <div className="px-2 py-1 rounded-full border border-emerald-800 flex  items-center justify-center">
              <p className="text-md font-medium m-0 text-emerald-800 uppercase">
                {food.category}
              </p>
            </div>
          </div>
          <h3 className="text-xl font-bold text-emerald-950 line-clamp-1 capitalize">
            {food.name}
          </h3>
          <p className="text-sm font-normal line-clamp-2">{food.description}</p>
        </div>
        <p className="text-md font-semibold italic text-emerald-950">
          {formatter.number(food.price, { currency: "EUR", style: "currency" })}
        </p>
      </div>
    </motion.div>
  );
};
