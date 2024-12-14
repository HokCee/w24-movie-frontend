import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Container = (props) => {
  const [plotExpanded, setPlotExpanded] = useState(false);

  const togglePlot = () => {
    setPlotExpanded((prevState) => !prevState);
  };

  return (
    <>
      <div className="container">
        <img
          src={props.movie.image}
          alt={`이미지: ${props.movie.title}`}
        />
        <a
          href={`https://www.youtube.com/results?search_query=${props.movie.title}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="movie-title">{`${props.movie.title}`}</div>
          <div className="movie-genre">{`장르: ${props.movie.genre}`}</div>
          <div className="movie-rating">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                style={{color: index < props.movie.rating ? "#ffc107" : "#e4e5e9"}}
              />
            ))}
          </div>
        </a>
        <button className="plot-button" onClick={togglePlot}>
          {plotExpanded ? "줄거리 ▲" : "줄거리 ▼"}
        </button>
      </div>
      {props.movie.plot && plotExpanded && (
        <pre className="movie-plot" onClick={togglePlot}>
          {props.movie.plot}
        </pre>
      )}
    </>
  );
};

export default Container;
