import React from "react";

type ResumeType = {
  children: string | React.ReactNode;
};

export default function Resume({ children }: ResumeType) {
  return (
    <a
      className="w-max text-accent"
      href="./docs/RODRIGO_SANTOS.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
