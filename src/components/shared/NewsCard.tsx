import Image from "next/image";
import Link from "next/link";
import React from "react";
import newImg from "@/assets/banner.jpg";
import { Button } from "../ui/button";
import { NewsCardProps } from "@/types/news";

const NewsCard = async ({ item }: NewsCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href={`/news/${item.id}`}>
        <Image
          src={item?.imageUrl}
          width={500}
          height={300}
          alt="news Image"
          className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200"
        />
      </Link>
      <div>
        <h2 className="text-xl font-semibold my-3">{item?.title}</h2>
        <p className="mb-4">{item?.description.substring(0, 70)}...</p>
        <Link href={`/news/${item.id}`}>
          <Button variant="default">Reade More</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
