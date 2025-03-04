"use client";

import { FC, PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <div className="bg-primary-main p-6 w-full h-dvh flex">
      <div className="bg-background w-full relative p-6 flex flex-col gap-8">
        <div className="h-full w-full flex flex-col gap-6">
          <div
            className="w-full h-full bg-white px-12 py-20"
            style={{
              borderImage: "url(/images/border.png)",
              borderImageWidth: "100%",
            }}
          >
            <div className="w-full h-full bg-white py-4">{children}</div>
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
    </div>
  );
};
