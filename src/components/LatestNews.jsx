import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="gap-2 flex items-center p-4 bg-[#F3F3F3]">
            <p className="w-[110px] h-[48px] flex text-xl text-white justify-center items-center bg-[#D72050]">Latest</p>
            <Marquee className="space-x-10">
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, minima.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, minima.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, minima.</Link>
                <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, minima.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;