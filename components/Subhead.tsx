import name from "@/scss/name.module.scss";

export default function Subhead({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`font-bold text-4xl mt-14 tracking-wide ${name["text-gradient"]}`}
    >
      {children}
    </div>
  );
}
