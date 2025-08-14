"use client";

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import ThemeManager from "@/components/themeManager/themeManager";
import ResponsiveNavbarAndTriangles from "@/components/responsiveNavbarAndTriangles/responsiveNavbarAndTriangles";

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

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html
        lang="en"
        className={` md:text-[18px] lg:text-[20px] ${poppins.variable} ${inter.variable}`}
      >
        <head>
          <title>Rey Isaac</title>
        </head>
        <ThemeManager />
        <body
          className={`antialiased bg-[rgb(235,235,235)] text-black dark:bg-black dark:text-white transition-colors duration-100`}
        >
          <ResponsiveNavbarAndTriangles />
          {children}
        </body>
      </html>
    </Provider>
  );
}
