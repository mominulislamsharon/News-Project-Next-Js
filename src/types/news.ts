export interface NewsItem {
  id: number;
  title: string;
  description: string;
  snippet: string;
  url: string;
  imageUrl: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: number;
}

export interface NewsCardProps {
  item: NewsItem;
}
