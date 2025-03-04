import { cn } from "@/utils/cn";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IColumnProps extends PropsWithChildren {
  title: string;
  onNext?: () => void;
  onPrev?: () => void;
  colSpan: "4" | "8";
}
export const Column: FC<IColumnProps> = (props) => {
  const { colSpan, title, onNext, onPrev, children } = props;
  return (
    <div
      className={cn("flex flex-col relative ", {
        "col-span-4": colSpan === "4",
        "col-span-7": colSpan === "8",
      })}
    >
      <div className="w-full flex flex-col gap-4 py-8 relative mx-auto">
        <div className="w-full flex flex-row items-center justify-center">
          <h3 className="text-4xl font-normal text-black">{title}</h3>
        </div>
        <div className="w-full h-fit absolute bottom-0">
          <Image
            src={"/images/title-border.png"}
            alt="Title Border"
            width={400}
            height={10}
            className="w-[95%] mx-auto h-2"
          />
        </div>
      </div>

      <div className="w-full h-full pt-8">{children}</div>

      <div className="w-full h-48 absolute top-32 hidden">
        <div
          onClick={onPrev}
          className="w-full h-full flex items-center justify-center bg-white"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180"
          >
            <path
              d="M18 13L12.7071 18.2929C12.3166 18.6834 11.6834 18.6834 11.2929 18.2929L6 13M18 7L12.7071 12.2929C12.3166 12.6834 11.6834 12.6834 11.2929 12.2929L6 7"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="w-full h-48 absolute -bottom-16">
        <div
          onClick={onNext}
          className="w-full h-full flex items-center justify-center bg-white"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 13L12.7071 18.2929C12.3166 18.6834 11.6834 18.6834 11.2929 18.2929L6 13M18 7L12.7071 12.2929C12.3166 12.6834 11.6834 12.6834 11.2929 12.2929L6 7"
              stroke="#111111"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
