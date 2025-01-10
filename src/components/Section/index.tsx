import { section } from "@/styles/containers";
import React from "react";

type AnchorType = {
  id: string;
  children: React.ReactNode;
};
export default function Section({ id, children }: AnchorType) {
  return (
    <div className={section} tabIndex={0}>
      <div className="md:mb-[128px] mb-[64px] w-full h-[1px]" id={id}></div>
      {children}
    </div>
  );
}
