
import { AiFillStar } from 'react-icons/ai';
import {  FaShareAlt } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const NewsCard = ({posts,handelDelete}) => {
       const handleShare = async (id) => {
    if (navigator.share) {
      try {
        await navigator.share({
          
          url:`http://localhost:5173/category/${id}`,
        });
       
      } catch (error) {
        toast.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API is not supported in this browser.');
      // Fallback for browsers that don't support the API (e.g., offer copy-to-clipboard)
    }
  };

    return (
        <div>
                  <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
      {/* Author + Share */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={(posts.image_url[0].name)}
            
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm">{posts.name}</h4>
            <p className="text-gray-500 text-xs">
              {/* {new Date(singleNews.author.published_date).toISOString().split("T")[0]} */}
            </p>
          </div>
        </div>
        <button onClick={()=>handleShare(posts._id)} className="text-gray-500 hover:text-gray-700">
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 leading-snug">{posts.title}</h2>

      {/* Thumbnail */}
      <img
        src={posts.thumbnail_url
}
        alt="News"
        className="w-full h-68 object-cover rounded"
      />

      {/* Details */}
      <p className="text-sm text-gray-700">
        {posts.details.length > 200 ? posts.details.slice(0, 200) + "..." : posts.details}
        <Link to={`/news/${posts._id}`} className="text-red-500 font-semibold cursor-pointer ml-1">Read More</Link>
      </p>

      {/* Footer: Rating and Views */}
      <div className="flex items-center justify-between pt-2 border-t">
        <div className="flex items-center gap-1 text-orange-400 text-sm">
          <AiFillStar />
          {/* <span>{singleNews.rating.number}</span> */}
        </div>
         <div onClick={() => handelDelete(posts._id)} className="badge text-2xl hover:text-red-600 btn badge-outline"><MdDeleteForever /></div>
      </div>
    </div>
        </div>
    );
};

export default NewsCard;