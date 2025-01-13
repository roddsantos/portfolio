import React from "react";

type ResumeType = {
  children: string | React.ReactNode;
  className?: string;
};

export default function Resume({ children, className }: ResumeType) {
  return (
    <a
      className={`w-max text-accent ${className}`}
      href="./docs/RODRIGO_SANTOS.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
