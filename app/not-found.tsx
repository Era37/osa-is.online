"use client";

import name from "@/scss/name.module.scss";
import { sleep } from "@/utilities/async";
import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    (async () => {
      await sleep(5000);
      window.location.href = "/";
    })();
  }, []);
  return (
    <div className="bg-black text-white flex h-screen">
      <p
        className={`${name["stroke-gradient"]} m-auto`}
        style={{ fontSize: 256 }}
      >
        404
      </p>
    </div>
  );
}
