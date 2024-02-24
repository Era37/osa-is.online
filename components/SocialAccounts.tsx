import Link from "next/link";

interface SocialAccount {
  name: string;
  link: string;
}

export default function SocialAccounts() {
  const accounts = [
    { name: "Github", link: "github.com/era37" },
    { name: "Bluesky", link: "bsky.app/profile/era3037.bsky.social" },
    { name: "Reddit", link: "reddit.com/user/era_3037" },
    { name: "Discord", link: "discord.com/users/496432681614180382" },
  ] as SocialAccount[];

  return (
    <div className="text-[#707070] mx-auto mt-auto">
      {accounts.map(({ link, name }, i) => (
        <div key={i} className="inline-flex">
          <Link
            href={`https://${link}`}
            target="_blank"
            className="inline-flex duration-300 transition-all hover:-translate-y-1"
          >
            {name}
          </Link>
          <p className="px-2">{i == accounts.length - 1 ? "" : " • "}</p>
        </div>
      ))}
    </div>
  );
}
