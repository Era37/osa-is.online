import Link from "next/link";

export default function Button({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`${className} flex px-4 py-2 w-fit rounded-lg font-medium transition-all hover:-translate-y-1 cursor-pointer`}
    >
      {children}
    </Link>
  );
}
