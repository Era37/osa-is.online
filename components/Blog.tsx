import Link from "next/link";

export default function Blog({
  title,
  description,
  date,
  id,
  className,
}: {
  id: string;
  className?: string;
  title: string;
  description: string;
  date: Date;
}) {
  return (
    <Link
      href={`/blog?id=${id}`}
      className={`${className} px-6 py-4 rounded-3xl mt-4 border-2 border-[#1a1a1a] hover:border-[#303030] transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
    >
      <p className="text-3xl font-bold pb-1">{title}</p>
      <p className="text-gray-400">{description}</p>
      <div className="text-sm text-[#383838]">
        {date.getMonth() + 1}/{date.getDate()}/
        {date.getFullYear().toString().slice(2)}
      </div>
    </Link>
  );
}
