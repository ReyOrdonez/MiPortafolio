"use client";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectTheme } from "@/redux/slices/themeSlice";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector(selectTheme);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch(toggleTheme())}>toggle</button>
    </div>
  );
}
