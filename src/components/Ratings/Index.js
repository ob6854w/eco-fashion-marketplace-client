import useRatings from "../../hooks/useRatings";
import { IoStarSharp } from "react-icons/io5";

function Ratings() {
  const {} = useRatings();

  return (
    <>
      <IoStarSharp className="star" />
      <IoStarSharp className="star" />
      <IoStarSharp className="star" />
      <IoStarSharp className="star" />
      <IoStarSharp className="star" />
    </>
  );
}

export default Ratings;
