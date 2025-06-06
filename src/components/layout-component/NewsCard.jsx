
import { AiFillStar } from 'react-icons/ai';
import { FaEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({singleNews}) => {

    return (
        <div>
                  <div className="bg-white rounded-xl shadow-md p-4 space-y-4">
      {/* Author + Share */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={singleNews.author.img}
            alt={singleNews.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm">{singleNews.author.name}</h4>
            <p className="text-gray-500 text-xs">
              {new Date(singleNews.author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 leading-snug">{singleNews.title}</h2>

      {/* Thumbnail */}
      <img
        src={singleNews.image_url}
        alt="News"
        className="w-full h-68 object-cover rounded"
      />

      {/* Details */}
      <p className="text-sm text-gray-700">
        {singleNews.details.length > 200 ? singleNews.details.slice(0, 200) + "..." : singleNews.details}
        <span className="text-red-500 font-semibold cursor-pointer ml-1">Read More</span>
      </p>

      {/* Footer: Rating and Views */}
      <div className="flex items-center justify-between pt-2 border-t">
        <div className="flex items-center gap-1 text-orange-400 text-sm">
          <AiFillStar />
          <span>{singleNews.rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <FaEye />
          <span>{singleNews.total_view}</span>
        </div>
      </div>
    </div>
        </div>
    );
};

export default NewsCard;