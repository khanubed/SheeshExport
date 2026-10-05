"use client";

import dynamic from "next/dynamic";

export const DynamicFloatingWidget = dynamic(
  () => import("./FloatingWidget").then((mod) => mod.FloatingWidget),
  { ssr: false }
);
