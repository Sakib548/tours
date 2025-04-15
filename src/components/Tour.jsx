import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const infoSumm = info.slice(0, info.length / 2);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isReadMore ? info : infoSumm}

          <button
            className="info-btn"
            onClick={() => setIsReadMore(!isReadMore)}
          >
            {isReadMore ? "Show Less..." : "Read More..."}
          </button>
        </p>

        <button
          type="button"
          className="btn btn-block delete-btn "
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
