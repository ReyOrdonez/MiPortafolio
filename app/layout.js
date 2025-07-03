"use client";

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import NavBar from "@/components/navBar/navBar";
import NavBarMobile from "@/components/navBarMobile/navBarMobile";
import { useIsMobile } from "./hooks/useIsMobile";

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
  const isMobile = useIsMobile();
  return (
    <Provider store={store}>
      <html
        lang="en"
        className={`md:text-[18px] lg:text-[20px] ${poppins.variable} ${inter.variable}`}
      >
        <body className={`antialiased  bg-black`}>
          {isMobile == true ? <NavBar /> : <NavBarMobile />}

          {children}
        </body>
      </html>
    </Provider>
  );
}
