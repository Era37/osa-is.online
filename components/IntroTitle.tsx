import Triangle from "./Triangle";
import name from "@/scss/name.module.scss";

export default function IntroTitle({ className }: { className?: string }) {
  // const loopArray = new Array(36).fill(null);
  return (
    <div className={`${className} text-8xl font-bold mx-auto sm:flex`}>
      hi, I'm&nbsp;
      <span className={`${name["name-styles"]} inline-flex relative`}>Osa</span>
    </div>
  );
}
