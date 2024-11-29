import React, { useState } from "react";
import "../styles/card.scss";

type CardFlipProps = {
  front: React.ReactNode; // Content for the front of the card
  back: React.ReactNode;  // Content for the back of the card
};

function Card({ front, back }: CardFlipProps) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-face card-front">{front}</div>
      <div className="card-face card-back">{back}</div>
    </div>
  );
}

export default Card;