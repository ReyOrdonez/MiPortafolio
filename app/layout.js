"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import NavBar from "@/components/navBar/navBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={`${inter.className}antialiased  bg-black`}>
          <NavBar
            className={
              "ml-[150px] fixed top-1/2 -translate-y-1/2 -mt-16 space-y-16"
            }
          />
          {children}
        </body>
      </html>
    </Provider>
  );
}
