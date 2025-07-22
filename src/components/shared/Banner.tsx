import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import bannerImg from "@/assets/banner.jpg"

const Banner = () => {
  return (
    <div className="bg-slate-100">
      <div className="px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* image */}
        <div>
          <Image src={bannerImg} alt="banner"/>
          
        </div>
        {/* text */}
        <div className="space-y-4 flex flex-col">
          <h4 className="text-sm font-medium text-gray-500">Technology</h4>
          <h2 className="text-3xl font-bold">
            Open Is Growing Fast and Burning Through Piles of Money
          </h2>
          <p className="text-gray-500">
            OpenAI, the company behind the popular ChatGPT chatbot, is growing
            rapidly and burning through piles of money.
            <br /> <br />
            The company is valued at $29 billion, but it is not yet profitable.
            OpenAI has raised over $1 billion in funding, and it is expected to
            continue to grow rapidly in the coming years.
          </p>
          <Button variant="default">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
