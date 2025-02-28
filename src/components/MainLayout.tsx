"use client";

import { FC, PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <div className="bg-primary-main p-6 w-full min-h-dvh flex">
      <div className="bg-background w-full relative p-6 flex flex-col gap-8">
        <div
          className="h-full w-full bg-no-repeat bg-center flex flex-col max-h-[88dvh] min-h-[2200px] z-[9999] overflow-hidden"
          style={{
            backgroundImage: "url(/images/border.png)",
            backgroundSize: "contain",
          }}
        >
          {children}
        </div>
        <div className="w-full grid grid-cols-2 px-16 py-4">
          <div>
            <h3 className="text-black text-4xl font-normal">
              {"Holen Sie sich das Menü und die Rabatte"}
            </h3>
            <p className="text-text-disabled text-2xl font-normal">
              {
                "Geben Sie Ihre E-Mail-Adresse ein, um das Menü und die neuesten Rabatte zu erhalten"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
