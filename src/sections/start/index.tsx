import { primaryButton } from "@/styles/buttons";

export default function StartSection() {
  const startContainer =
    "flex flex-col justify-center items-left w-screen h-1/4 p-20 bg-transparent rounded-xl";

  return (
    <div className={startContainer}>
      <h1 className="text-primary font-bold">Rodrigo</h1>
      <h1 className="text-foreground font-bold">Santos</h1>
      <h4 className="text-foreground mt-2">Ful Stack Web Developer</h4>
      <button className={primaryButton + " mt-2"}>contatos</button>
    </div>
  );
}
