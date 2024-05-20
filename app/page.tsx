"use client";

import textAnimate from "@/scss/text-animate.module.scss";
import { useEffect, useState } from "react";
import { sleep } from "@/utilities/async";

export default function Home() {
  const [phrase, setPhrase] = useState("");

  const phrases = ["JavaScript Developer", "Backend Nerd"];
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
      await sleep(250);
    }
  };
  useEffect(() => {
    phraseUpdate();
  }, []);
  // text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text
  return (
    <div className="min-h-screen flex text-white bg-[#181818]">
      <div className="m-auto h-[50vh] font-bold text-6xl">
        <div className="text-slate-300 text-center">hi, I'm a</div>
        <p
          id="textHighlight"
          className={`text-center ${textAnimate["text-gradient"]}`}
        >
          {phrase}
        </p>
      </div>
    </div>
  );
}
