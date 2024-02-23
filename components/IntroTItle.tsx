import Triangle from "./Triangle";

export default function IntroTitle({ className }: { className?: string }) {
  const loopArray = new Array(36).fill(null);
  return (
    <div className={`${className} text-8xl font-bold mx-auto sm:flex`}>
      hi, I'm&nbsp;
      <span className="inline-flex relative">
        Osa{" "}
        <div className="absolute flex">
          {loopArray.map(() => (
            <Triangle />
          ))}
        </div>
      </span>
    </div>
  );
}
