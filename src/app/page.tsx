import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import { NewsItem } from "@/types/news";

const Home = async () => {
  const data = await fetch("http://localhost:3000/news-data.json");
  const news = await data.json();
  return (
    <div className="py-12">
      <Banner />
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8 ">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.slice(0, 3).map((item: NewsItem) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
