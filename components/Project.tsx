export default function Project({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} border-2 rounded-lg transition-all hover:-translate-y-1 duration-500 cursor-pointer max-w-72 border-[#202020] p-4 `}
    >
      <p className="text-3xl font-bold mb-2">{title}</p>
      <div className="text-gray-400">{description}</div>
    </div>
  );
}
