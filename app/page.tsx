"use client";

import textAnimate from "@/scss/text-animate.module.scss";
import name from "@/scss/name.module.scss";
import { useEffect, useState } from "react";
import { sleep } from "@/utilities/async";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  const [phrase, setPhrase] = useState("");

  const phrases = [
    "TypeScript Developer",
    "Self hosting lover",
    "Low level enjoyer",
  ];
  function addRemoveClass(addClass: string, removeClass: string) {
    const elementList = (
      document.getElementById("textHighlight") as HTMLElement
    ).classList;
    elementList.remove(textAnimate[removeClass]);
    elementList.add(textAnimate[addClass]);
  }

  function phraseShift() {
    setPhrase(phrases[0]);
    phrases.push(phrases[0]);
    phrases.shift();
  }

  const phraseUpdate = async () => {
    while (true) {
      addRemoveClass("text-animate", "text-animate-reverse");
      phraseShift();
      await sleep(3000);
      addRemoveClass("text-animate-reverse", "text-animate");
      await sleep(400);
    }
  };
  useEffect(() => {
    phraseUpdate();
  }, []);
  return (
    <>
      <Header />
      <div className="min-h-screen flex text-lg text-white bg-black px-4">
        <div className="m-auto flex flex-col">
          <div className="font-bold text-6xl">
            <div className="text-slate-300 text-center">hi, I'm a</div>
            <p
              id="textHighlight"
              className={`text-center ${name["solid-gradient"]} h-32 sm:h-20 ${textAnimate["text-gradient"]}`}
            >
              {phrase}
            </p>
          </div>
          <p className="mt-2 mx-auto text-center max-w-[30rem]">
            Hey, my name is <span className={name["solid-gradient"]}>Osa</span>.
            I'm a fullstack developer from Toronto Canada.
          </p>
        </div>
      </div>
    </>
  );
}
