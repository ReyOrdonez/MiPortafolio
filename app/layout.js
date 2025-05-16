"use client";

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import NavBar from "@/components/navBar/navBar";
import NavBarMobile from "@/components/navBarMobile/navBarMobile";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
        <body className={`antialiased  bg-black`}>
          <NavBar
            className={
              "hidden lg:flex ml-[150px] fixed top-1/2 -translate-y-1/2 -mt-16 space-y-16"
            }
          />
          <NavBarMobile />
          {children}
        </body>
      </html>
    </Provider>
  );
}
