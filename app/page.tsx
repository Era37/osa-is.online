"use client";

import Blog from "@/components/Blog";
import InputBox from "@/components/InputBox";
import IntroTitle from "@/components/IntroTitle";
import Button from "@/components/Button";
import SocialAccounts from "@/components/SocialAccounts";
import Subhead from "@/components/Subhead";
import TextArea from "@/components/TextArea";
import Link from "next/link";
import { useEffect, useState } from "react";
import { blogs } from "@prisma/client";

export default function Home() {
  const [blogs, setBlogs] = useState([] as blogs[]);
  const [email, setEmail] = useState("");
  const [emailContent, setEmailContent] = useState("");
  async function getBlogs() {
    const response = await (await fetch("/api/blogs")).json();
    console.log(response);
    setBlogs(response);
  }
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <main className="min-h-screen flex flex-col">
      <div className="max-w-[40rem] mx-auto flex flex-col">
        <IntroTitle className="mt-24 mx-auto" />
        <div className="mt-6 text-lg tracking-wide">
          My name is Osa, and I'm a student from Ontario Canada. I hobby as a
          fullstack developer who works with Python, Node.js, Vue, Tailwind,
          Rust, C(++) and much more. To view my projects checkout my{" "}
          <Link
            className="font-bold flex"
            target="_blank"
            href="https://github.com/era37"
          >
            Github
          </Link>
        </div>

        {blogs.length ? (
          <>
            <Subhead>Blogs</Subhead>
            {blogs.map(({ title, description, id, created }, i) => (
              <Blog
                key={i}
                title={title}
                description={description}
                date={new Date(created)}
                id={id}
              />
            ))}
          </>
        ) : (
          <></>
        )}
        <Subhead>Contact</Subhead>
        <p className="pt-2">Send me an email!</p>
        <div className="mt-2 mb-24 flex flex-col w-64">
          <InputBox setter={setEmail} placeholder="your_email@example.com" />
          <TextArea placeholder="Your message here!" setter={setEmailContent} />
          <Button
            onClick={() => {
              fetch("/api/email", {
                method: "POST",
                body: JSON.stringify({ email, content: emailContent }),
              });
              window.location.reload();
            }}
            theme="light"
            className="mt-4"
          >
            Send Email
          </Button>
        </div>
      </div>
      <SocialAccounts />
    </main>
  );
}
