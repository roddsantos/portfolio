import Image from "next/image";
import Profile from "../../../public/images/rodrigo-santos-edited.jpeg";
import { INTRO_TEXT } from "@/utils/texts";
import { container, shadows } from "@/styles/containers";
import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";

export default function IntroSection() {
  return (
    <Section id="intro">
      <article
        className={`${container} justify-around bg-container-2 flex-wrap sm:flex-wrap`}
      >
        <SectionTitle icon="person" title="Introdução" />
        <div className="w-max md:w-60 h-40 md:h-60">
          <Image
            className={`object-cover pos w-40 h-40 md:w-60 md:h-60 ${shadows}`}
            src={Profile}
            alt="profile photo"
          />
        </div>
        <p className="w-full md:w-[calc(100%-20rem)] text-sm lg:text-xl">
          {INTRO_TEXT}
        </p>
      </article>
    </Section>
  );
}
