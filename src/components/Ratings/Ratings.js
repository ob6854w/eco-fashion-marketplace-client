import { IoStarSharp, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";

function Ratings({ rating }) {
  // If <int>.0 then dont render half star
  // If <int>.<greater-than-zero> then render half star
  const shouldRenderHalfStar = rating % 1 !== 0;

  return Math.floor(rating) === 0 ? (
    <>
      {Array(5)
        .fill()
        .map((_, i) => (
          <IoStarOutline key={i} className="star" />
        ))}
    </>
  ) : (
    <>
      {Array(Math.floor(rating))
        .fill()
        .map((_, i) => (
          <IoStarSharp key={i} className="star" />
        ))}
      {shouldRenderHalfStar && <IoStarHalfSharp className="star" />}
      {Array(5 - Math.ceil(rating))
        .fill()
        .map((_, i) => (
          <IoStarOutline className="star" />
        ))}
    </>
  );
}

export default Ratings;
