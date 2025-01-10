import Resume from "@/components/Resume";
import CustomTooltip from "@/components/Tooltip";
import { shadows } from "@/styles/containers";
import Link from "next/link";

export default function HeaderSection() {
  const header = `md:flex hidden fixed top-0 w-screen justify-center mt-4`;
  const headerContainer = `${shadows} bg-background flex mx-auto px-2 py-0 items-center`;
  const link = "text-foreground hover:text-accent px-4 py-2 mr-8";
  const icon = "bx bxs-file-pdf text-foreground text-2xl mt-[4px]";

  return (
    <header className={header}>
      <div className={headerContainer}>
        <Link href="#intro" className={link}>
          intro
        </Link>
        <Link href="#education" className={link}>
          educação
        </Link>
        <Link href="#experience" className={link}>
          experiência
        </Link>
        <Link href="#projects" className={link}>
          projetos
        </Link>
        <Link href="#skills" className={link}>
          competências
        </Link>
        <CustomTooltip title="Currículo">
          <Resume>
            <button className={`${link} mr-0`}>
              <i className={icon}></i>
            </button>
          </Resume>
        </CustomTooltip>
      </div>
    </header>
  );
}
