import name from "@/scss/name.module.scss";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header() {
  const socials = [
    { svg: "GitHub.svg", url: "github.com/Era37" },
    { svg: "Bluesky.svg", url: "bsky.app/profile/osa-is.online" },
  ];
  const strokeThickness = useMediaQuery("(max-width: 640px)")
    ? "stroke-thin"
    : "stroke-thick";
  return (
    <div className="w-screen border-b-2 flex p-4 border-[#101010] absolute top-0">
      <p className={`text-2xl sm:text-5xl font-bold my-auto`}>
        osa-is
        <span className={`${name["stroke-white"]} ${name[strokeThickness]}`}>
          .online
        </span>
      </p>
      <div className="ml-auto flex space-x-3 my-auto">
        {socials.map(({ svg, url }, i) => (
          <Link
            key={i}
            target="_blank"
            href={`https://${url}`}
            className="transition-all hover:-translate-y-1"
          >
            <img src={`/svgs/${svg}`} className="h-7 w-7" />
          </Link>
        ))}
      </div>
    </div>
  );
}
