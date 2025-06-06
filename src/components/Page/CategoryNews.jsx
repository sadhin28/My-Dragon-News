import { useLoaderData } from "react-router-dom";
import NewsCard from "../layout-component/NewsCard";

const CategoryNews = () => {
    const {data:news} = useLoaderData()

    return (
        <div>
            <h1 className="font-bold">Dragon News Home</h1>
            <h1 className="font-bold text-xs">({news.length}) News Found InThis Category</h1>
            <div className="flex flex-col gap-5">
                {
                    news.map(singleNews=><NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;