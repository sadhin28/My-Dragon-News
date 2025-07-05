import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="gap-2   flex items-center p-4 bg-[#F3F3F3]">
           <Link to='/AddPost'> <p className="w-[100px] btn h-[40px] flex text-sm text-white justify-center items-center bg-[#D72050]">Post</p></Link>
            <Marquee pauseOnHover='true'className="space-x-10">
                <p className="px-5">বাংলাদেশ জাতীয়তাবাদী ছাত্রদল</p>
                <p className="px-5">সিটি বিশ্ববিদ্যালয় শাখা</p>
                <p className="px-5">বাংলাদেশ জাতীয়তাবাদী ছাত্রদল</p>
                <p className="px-5">সিটি বিশ্ববিদ্যালয় শাখা</p>
                <p className="px-5">বাংলাদেশ জাতীয়তাবাদী ছাত্রদল</p>
                <p className="px-5">সিটি বিশ্ববিদ্যালয় শাখা</p>
                <p className="px-5">বাংলাদেশ জাতীয়তাবাদী ছাত্রদল</p>
                <p className="px-5">সিটি বিশ্ববিদ্যালয় শাখা</p>
                
               
            </Marquee>
             <Link to='/AddMember'> <p className="w-[100px] btn h-[40px] flex text-sm text-white justify-center items-center bg-[#D72050]">Add MEmbers</p></Link>
        </div>
    );
};

export default LatestNews;