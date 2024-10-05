import React from "react";
import avtar from "../Assets/img.png";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

function Hero() {
  return (
    <div className="h-full w-full bg-black p-10 md:px-60 flex flex-col gap-40">
      <div className="text-white flex md:flex-row flex-col w-full">
        <div className="w-full h-full flex flex-col justify-between gap-5">
          <h1 className="text-5xl font-semibold">
            Trust me,{" "}
            <span className="text-cyan-400">I'm a software engineer.</span>
          </h1>
          <p className="text-zinc-400 font-light">
            Meet Piyush Garg, content creator, educator, and entrepreneur known
            for his expertise in the tech industry. He has successfully launched
            numerous technical courses on various platforms. Founder of
            Teachyst, white-labeled Learning Management System (LMS) to help
            educators monetize their content globally.
          </p>
          <p className="text-zinc-400 font-light">
            Join my <span className="text-white font-normal">Cloud </span>{" "}
            Cources ✨
          </p>
          <button className="bg-red-500 w-fit h-fit p-2 px-6 rounded-2xl mb-2">
            Join Youtube
          </button>
        </div>
        <div className="w-fit h-full">
          <img src={avtar} className="w-[650px] md:h-full h-fit rounded-2xl" />
          <div className="flex justify-center gap-6 pt-2">
            <AiOutlineYoutube className="text-xl text-zinc-400" />
            <AiOutlineTwitter className="text-xl text-zinc-400" />
            <AiOutlineLinkedin className="text-xl text-zinc-400" />
            <AiOutlineGithub className="text-xl text-zinc-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
