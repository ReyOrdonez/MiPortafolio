"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/redux/slices/themeSlice";

export default function ThemeManager() {
  const isDark = useSelector(selectTheme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return null;
}
