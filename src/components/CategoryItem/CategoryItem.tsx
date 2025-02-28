import { IFood } from "@/types";
import { FC } from "react";

interface ICategoryItemProps {
  categoryItem: IFood["category"];
}
export const CategoryItem: FC<ICategoryItemProps> = (props) => {
  const { categoryItem } = props;
  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <div className="w-32 aspect-video bg-slate-100"></div>
      <div>
        <h3 className="text-3xl text-black font-normal text-center">
          {categoryItem}
        </h3>
      </div>
    </div>
  );
};
