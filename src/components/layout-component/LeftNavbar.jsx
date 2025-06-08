import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories,setcategories]=useState([])
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data=>{
            
            setcategories(data.data.news_category)
        })
    },[])
    return (
        <div className="grid gap-3  sticky md:top-70 left">
            <h1 className="font-bold">All Category({categories.length})</h1>
            <div className="flex flex-col gap-2 text-[#9F9F9F]">
                {
                    categories.map(category=><NavLink to={`/category/${category.category_id}`} className='btn' key={category.category_id} >{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;