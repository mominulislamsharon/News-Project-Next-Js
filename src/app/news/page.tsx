import NewsList from "@/components/news/NewsList";
import React from "react";

const NewsPage = () => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-8">Latest News</h2>
      <NewsList />
    </div>
  );
};

export default NewsPage;
