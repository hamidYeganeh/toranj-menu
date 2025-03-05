import { MenuItemContext } from "@/context/MenuItemContext";
import { menu } from "@/menu";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useFormatter } from "next-intl";
import Image from "next/image";
import { useContext } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const MenuItemModal = () => {
  const { selectedItem, onSelectItem } = useContext(MenuItemContext);

  const formatter = useFormatter();

  const findSelectedItem = menu.find(
    (menuItem) => menuItem.code === selectedItem
  );
  const isAnyItemSelected = !!selectedItem;

  return (
    <>
      <div
        className={cn({
          "absolute inset-0 m-auto z-[99998] h-full w-full bg-[#0000007D] bg-clip-padding backdrop-filter backdrop-blur-xl":
            isAnyItemSelected,
        })}
      ></div>
      <motion.div
        layout
        layoutId={selectedItem!}
        className={cn(
          "transition-all duration-300",
          isAnyItemSelected
            ? "w-full max-w-5xl h-fit min-h-[700px] bg-white absolute inset-0 m-auto z-[99999]"
            : "size-0 absolute inset-0"
        )}
      >
        <div className="w-full h-full flex flex-col gap-8 p-16">
          <div className="w-full flex flex-row items-center justify-between">
            <Image
              src={"/images/logo.svg"}
              alt="LOGO"
              width={64 * 4}
              height={21 * 4}
              className="w-64 h-auto"
            />
            <div
              className="size-24 bg-secondary-light rounded-full flex items-center justify-center"
              onClick={() => onSelectItem(null)}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-24"
              >
                <path
                  d="M17 7.13708L7 17.1371M17 17.1371L7 7.13709"
                  stroke="#BBA360"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-8">
            <Image
              src={"/images/logo-border.svg"}
              alt="Border Title"
              width={300}
              height={36}
              className="w-full h-auto"
            />

            <h2 className="text-7xl font-normal text-black text-left w-full">
              {findSelectedItem?.name}
            </h2>

            {isAnyItemSelected ? (
              <Swiper
                pagination={{
                  clickable: true,
                }}
                grabCursor
                mousewheel
                modules={[Pagination]}
                className="w-full aspect-square"
                slidesPerView={1}
                spaceBetween={12}
              >
                {findSelectedItem?.images?.map((image, imageIndex) => (
                  <SwiperSlide key={imageIndex} className="keen-slider__slide">
                    <Image
                      src={image!}
                      alt={image!}
                      width={500}
                      height={500}
                      className="w-full aspect-square object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="w-full aspect-square bg-gray-400 animate-pulse"></div>
            )}
            <Image
              src={"/images/logo-border.svg"}
              alt="Border Title"
              width={300}
              height={36}
              className="w-full h-auto rotate-180"
            />
          </div>
          {isAnyItemSelected ? (
            <p className="text-4xl font-normal text-[#787878]">
              {findSelectedItem?.description}
            </p>
          ) : (
            <div>
              <div className="w-full h-9 bg-gray-400 animate-pulse rounded"></div>
              <div className="w-2/5 h-9 mt-4 bg-gray-400 animate-pulse rounded"></div>
            </div>
          )}
          {isAnyItemSelected ? (
            <p className="text-6xl font-normal text-black">
              {formatter.number(findSelectedItem?.price!, {
                style: "currency",
                currency: "EUR",
              })}
            </p>
          ) : (
            <div className="w-64 h-14 bg-gray-400 animate-pulse rounded"></div>
          )}
        </div>
      </motion.div>
    </>
  );
};
