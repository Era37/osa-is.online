import { MouseEventHandler } from "react";

export default function Button({
  children,
  theme,
  onClick,
  className,
}: {
  children: React.ReactNode;
  theme: "light" | "dark";
  onClick: MouseEventHandler<HTMLDivElement>;
  className?: string;
}) {
  return (
    <div
      onClick={(event) => onClick(event)}
      className={`${
        theme == "light"
          ? "text-black bg-white"
          : "border-2 border-[#202020] text-white"
      } ${className} flex px-4 py-2 w-fit rounded-lg font-medium transition-all hover:-translate-y-1 cursor-pointer`}
    >
      {children}
    </div>
  );
}
