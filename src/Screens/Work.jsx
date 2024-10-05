import { Button } from "@mui/material";
import React from "react";
import VerticalTabs from "../Components/Tabs";

function Work() {
  return (
    <div className="h-full w-full bg-black p-10 md:px-60 text-white flex flex-col gap-5">
      <div className="text-white gap-5 flex flex-col">
        <h2 className="text-3xl font-medium"> Work Experience</h2>
        <p className="text-zinc-400">
          I switch a lot of companies. It's mostly about the culture.
        </p>
      </div>
      <div className="">
        <VerticalTabs />
      </div>
    </div>
  );
}

export default Work;
