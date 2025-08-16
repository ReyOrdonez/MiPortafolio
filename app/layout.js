"use client";

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import ThemeManager from "@/components/themeManager/themeManager";
import ResponsiveNavbarAndTriangles from "@/components/responsiveNavbarAndTriangles/responsiveNavbarAndTriangles";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metaData = {
  title: "Rey Isaac",
  description:
    "  Code, design, interaction. This is my portfolio, where creativity meets technology.",
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html
        lang="en"
        className={` md:text-[18px] lg:text-[20px] ${poppins.variable} ${inter.variable}`}
      >
        <body
          className={`antialiased bg-[rgb(235,235,235)] text-black dark:bg-black dark:text-white transition-colors duration-100`}
        >
          <ThemeManager />
          <ResponsiveNavbarAndTriangles />
          {children}
          {/*UMAMI ANALYTICS*/}
          <Script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="b4a5d25f-f49a-4386-9813-ccf42de79958"
          />
        </body>
      </html>
    </Provider>
  );
}
