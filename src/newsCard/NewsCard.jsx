/* eslint-disable no-undef */
import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsCard = ({ aNews }) => {
  const {
    rating,
    total_view,
    title,
    author,
  
    details,
    image_url,
    _id
  } = aNews;
  return (
    <div>
      <div className=" ">
        <div className="p-3">
          <div className="flex justify-between my-4">
            <div className="flex items-center gap-2">
              <img className="w-12 rounded-full" src={author.img} alt="" />
              <div>
                <h1>{author.name}</h1>
                <h2>{author.published_date}</h2>
              </div>
            </div>
            <div className="flex text-2xl">
              <FaBookmark></FaBookmark>
              <FaShareAlt></FaShareAlt>
            </div>
          </div>
          <h1 className="text-2xl">{title}</h1>

          <img className="w-full" src={image_url} alt="" />
        </div>
        <div className="my-4 text-lg">
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/aNews/${_id}`} className="text-red-600 font-semibold">Read More .. </Link>
            </p>
          )
           : 
          (
            <p>{details}</p>
          )}
        </div>
        <div className="flex justify-between">
          <div className="rating flex items-center">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <div className="ms-2 font-bold text-xl ">{rating.number}</div>
          </div>

          <div className="flex text-xl items-center gap-2 py-3 px-5">
            <FaEye></FaEye>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
