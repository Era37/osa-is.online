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
  ] as SocialAccount[];

  return (
    <div className="text-[#707070] mx-auto mt-auto">
      {accounts.map(({ link, name }, i) => (
        <>
          <Link
            href={link}
            className="inline-flex duration-300 transition-all hover:-translate-y-1"
          >
            {name}
          </Link>
          {i == accounts.length - 1 ? "" : " • "}
        </>
      ))}
    </div>
  );
}
