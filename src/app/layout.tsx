import type { Metadata } from "next";
import { Fira_Sans, Fira_Code, Lustria } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "keen-slider/keen-slider.min.css";
import { NextIntlClientProvider } from "next-intl";

const LustriaFont = Lustria({
  variable: "--font-lustria",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${LustriaFont.variable} ${LustriaFont.style} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
