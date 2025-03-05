import type { Metadata } from "next";
import { Lustria } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/grid";
import { NextIntlClientProvider } from "next-intl";
import { AnimatePresence } from "framer-motion";

const LustriaFont = Lustria({
  variable: "--font-lustria",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans"],
});

export const metadata: Metadata = {
  title: "Toranj Restaurant",
  description: "Generated https://spexup.com",
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
        <NextIntlClientProvider>
          <AnimatePresence>{children}</AnimatePresence>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
