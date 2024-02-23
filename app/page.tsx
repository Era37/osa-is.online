import Blog from "@/components/Blog";
import Button from "@/components/Button";
import IntroTitle from "@/components/IntroTItle";
import Project from "@/components/Project";
import SocialAccounts from "@/components/SocialAccounts";
import Subhead from "@/components/Subhead";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="max-w-[40rem] mx-auto flex flex-col">
        <IntroTitle className="mt-24 mx-auto" />
        <div className="mt-6 text-lg tracking-wide">
          My name is Osa, and I'm a student from Ontario Canada. I hobby as a
          fullstack developer who works with Python, Node.js, Vue, Tailwind,
          Rust, C(++) and much more.
        </div>
        <Subhead>Blogs</Subhead>
        <Blog
          title="test"
          description="this is a test meow meow meow I like women asdkfjnsd"
          date={new Date(Date.now())}
        />
        <Subhead>Projects</Subhead>
        <div className="pt-4 flex space-x-4">
          <Project
            title="Xiana"
            description="Xiana is an open source media storage system included with a CLI for managing your media storage in production"
            className="hover:border-xiana hover:text-xiana"
          />
          <Project
            title="tifi"
            className="hover:border-tifi hover:text-tifi"
            description="tifi is a image building platform with the ability to publish media and blogs."
          />
        </div>
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
