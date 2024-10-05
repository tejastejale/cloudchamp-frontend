import React from "react";
import VerticalTabs from "../Components/Tabs";

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
function Cources() {
  return (
    <div className="h-full w-full bg-black p-10 md:px-60 text-white flex flex-col gap-5">
      <div className="text-white gap-5 flex flex-col">
        <h2 className="text-3xl font-medium">Cources</h2>
        <p className="text-zinc-400">
          Explore a selection of courses designed to help you enhance your
          skills.
        </p>
      </div>
      <div>{/* <HoverEffect items={projects} /> */}</div>
    </div>
  );
}

export default Cources;
