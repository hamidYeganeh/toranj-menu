"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { FC, PropsWithChildren, useState } from "react";

export const MainLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const [email, setEmail] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  function handleSubmit() {
    setIsInputFocused(false);
    console.log(email);

    setTimeout(() => {
      setEmail("");
    }, 2000);
  }

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
            <div className="w-full h-full">
              <motion.div
                className={cn(
                  "w-full h-full bg-clip-padding backdrop-filter backdrop-blur-xl flex flex-col gap-8 items-center justify-center transition-all relative",
                  {
                    "absolute inset-0 m-auto bg-[#ffffff24] z-[999999] px-8 py-4":
                      isInputFocused,
                  }
                )}
              >
                <div
                  className={cn(
                    "w-full flex items-center justify-end max-w-6xl",
                    {
                      hidden: !isInputFocused,
                    }
                  )}
                >
                  <div
                    className="size-24 bg-secondary-light rounded-full flex items-center justify-center"
                    onClick={() => setIsInputFocused(false)}
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
                <div className="w-full h-full max-w-6xl max-h-28 relative flex items-center justify-center">
                  <input
                    onClick={() => {
                      setIsInputFocused(true);
                    }}
                    ref={(ref) => ref! && ref!.focus()}
                    placeholder="E-Mail-Adresse eingeben"
                    className={cn(
                      "w-full bg-secondary-light rounded-full z-[9999998]",
                      isInputFocused ? "h-full p-8 text-4xl" : "p-6 text-2xl"
                    )}
                  />
                  <button
                    className={cn(
                      "rounded-full bg-black w-full max-w-64 h-20 absolute end-4 my-auto text-white text-3xl font-normal z-[9999999]",
                      { hidden: !isInputFocused }
                    )}
                    onClick={handleSubmit}
                  >
                    Schicken
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
