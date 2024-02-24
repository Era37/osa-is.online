"use client";

import blinker from "@/scss/blinker.module.scss";
import { sleep } from "@/utils/sleep";
import { useEffect, useState } from "react";

export default function Custom404() {
  const [text, setText] = useState("404");

  async function removeWord() {
    for (const letter of text) {
      await sleep(150);
      setText((prev) => prev.slice(0, -1));
    }
  }
  async function writeWord(word: string) {
    for (const letter of word) {
      setText((prev) => prev + letter);
      await sleep(150);
    }
  }
  useEffect(() => {
    (async () => {
      await sleep(2000);
      await removeWord();
      await sleep(1000);
      await writeWord("Not Found :(");
      await sleep(3000);
      window.location.href = "/";
    })();
  }, []);
  return (
    <div className="h-screen flex">
      <p className="text-5xl font-medium m-auto">
        <span>{text}</span>
        <span className={blinker.blinker}>|</span>
      </p>
    </div>
  );
}
