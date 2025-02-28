import { IFood } from "@/types";
import { useFormatter } from "next-intl";
import { FC } from "react";

interface IMenuItemProps {
  menuItem: IFood;
}
export const MenuItem: FC<IMenuItemProps> = (props) => {
  const { menuItem } = props;
  const formatter = useFormatter();
  return (
    <div className="flex flex-col w-full gap-4">
      <div
        className="w-full flex flex-row items-center justify-between gap-4
      "
      >
        <h2 className="text-4xl font-normal text-primary-main line-clamp-1">
          {menuItem.name}
        </h2>

        <div className="flex-1 h-px bg-secondary-main" />

        <p className="text-2xl font-normal">
          {formatter.number(menuItem.price, {
            currency: "EUR",
            currencySign: "standard",
            style: "currency",
          })}
        </p>

        <div className="size-12 rounded-full bg-secondary-light flex items-center justify-center">
          <use>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6L15.2929 11.2929C15.6834 11.6834 15.6834 12.3166 15.2929 12.7071L10 18"
                stroke="#BBA360"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </use>
        </div>
      </div>
      <div>
        <p className="text-xl font-normal text-[#787878]">
          {menuItem.description}
        </p>
      </div>
    </div>
  );
};
