import React from "react";

const Card = ({ books }) => {
  const { image, title, author, details, id } = books;

  return (
    <div className="card">
      <img src={image} alt="books" />

      <div className="content">
        <h2>{title}</h2>
        <h4>{author}</h4>

        {details.map(({ genre, year }) => (
          <div key={id}>
            <p>{genre}</p>
            <p>{year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
