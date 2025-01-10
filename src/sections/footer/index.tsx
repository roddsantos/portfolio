"use client";
import Resume from "@/components/Resume";
import CustomTooltip from "@/components/Tooltip";
import { secondaryButton } from "@/styles/buttons";
import { shadows } from "@/styles/containers";
import { SECTIONS } from "@/utils/navigation";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function FooterSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const footer = `md:hidden flex fixed bottom-0 w-screen justify-center mb-4`;
  const footerContainer = `${shadows} bg-background flex mx-auto px-2 py-0 items-center`;
  const link = "text-foreground hover:text-accent p-2 ml-4";
  const icon = "bx bxs-file-pdf text-foreground sm:text-4xl text-3xl mt-[0px]";

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setIsScrolled(scrollY > 360);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <footer className={footer}>
      {isScrolled && (
        <Link
          href="#start"
          className={`${secondaryButton} absolute right-5 bottom-20`}
        >
          <i className="bx bx-up-arrow-alt text-foreground"></i>
        </Link>
      )}
      <div className={footerContainer}>
        <CustomTooltip title="Currículo">
          <Resume>
            <button className={`${link} mr-0`}>
              <i className={icon}></i>
            </button>
          </Resume>
        </CustomTooltip>
        {SECTIONS.map((section) => (
          <CustomTooltip key={section.icon} title={section.name}>
            <Link href={`#${section.id}`} className={link}>
              <i className="material-icons icon text-frontground">
                {section.icon}
              </i>
            </Link>
          </CustomTooltip>
        ))}
      </div>
    </footer>
  );
}
