import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const {data} = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1 className="font-bold">({data.length}) News Found In This Category</h1>
        </div>
    );
};

export default CategoryNews;