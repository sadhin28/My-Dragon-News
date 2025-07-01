import { useLoaderData } from "react-router-dom";
import NewsCard from "../layout-component/NewsCard";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const CategoryNews = () => {
    const news = useLoaderData()
  
    const {loading}=useContext(AuthContext)
    return (
        <div>

            <h1 className="font-bold">Dragon News Home</h1>
            <h1 className="font-bold text-xs">({news.length}) News Found InThis Category</h1>
            {
                loading && <div className="grid relative top-40 justify-center">
            <span className="loading  loading-infinity loading-xl"></span>
            
        </div>
            }
            <div className="flex flex-col gap-5">
                {
                    news.map(posts=><NewsCard posts={posts}></NewsCard>)
                }
                
            </div>
        </div>
    );
};

export default CategoryNews;