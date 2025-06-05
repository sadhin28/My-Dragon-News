import { useLoaderData } from "react-router-dom";
import NewsCard from "../layout-component/NewsCard";

const CategoryNews = () => {
    const {data:news} = useLoaderData()
    console.log(news)
    return (
        <div>
            <h1 className="font-bold">Dragon News Home</h1>
            <h1 className="font-bold text-xs">({news.length}) News Found InThis Category</h1>
            <div>
                {
                    news.map(singleNews=><NewsCard key={singleNews.category_id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;