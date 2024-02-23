import Blog from "@/components/Blog";
import Button from "@/components/Button";
import IntroTitle from "@/components/IntroTItle";
import Project from "@/components/Project";
import SocialAccounts from "@/components/SocialAccounts";
import Subhead from "@/components/Subhead";
import Link from "next/link";

export default function Home() {
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
        <Subhead>Blogs</Subhead>
        <Blog
          title="test"
          description="this is a test meow meow meow I like women asdkfjnsd"
          date={new Date(Date.now())}
        />
        <Subhead>Contact</Subhead>
        <div className="mt-4 mb-24 flex space-x-4">
          <Button className="bg-white text-black" href="test">
            Discord
          </Button>
          <Button
            className="border-2 border-[#202020]"
            href="mailto:osalorenzo@gmail.com"
          >
            Email
          </Button>
        </div>
      </div>
      <SocialAccounts />
    </main>
  );
}
