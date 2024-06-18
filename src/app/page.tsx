"use client"

import { useMediaQuery } from "@react-hooks-library/core";
import React from "react";
import { Introduction } from "./components/introduction/introduction.component";

export default function Home() {
  const paddingTop = useMediaQuery('(max-height: 360px)');
  return (
    <div className={`${paddingTop ? "pt-28" : "h-screen"} flex items-center justify-center flex-col gap-5`}>
      <Introduction />
    </div>
  );
};