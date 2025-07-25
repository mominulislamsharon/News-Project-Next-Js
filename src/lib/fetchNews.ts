export const fetchNews = async (category: string = "", search: string = "") => {
  try {
    const response = await fetch(
      `http://localhost:3000/news-data.json?category=${category}&search=${search}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    const filtered = data.filter((item: any) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category
        ? item.categories.includes(category)
        : true;

      return matchesSearch && matchesCategory;
    });

    return filtered;
  } catch (error) {
    console.log("Error fetching news: ", error);
    return [];
  }
};
