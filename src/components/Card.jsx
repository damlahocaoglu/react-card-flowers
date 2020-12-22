import React from "react";

function Card(props) {
  const { imgUrl, title, price } = props.item;
  const ITEM = props.item;

  return (
    <div className="card">
      {imgUrl ? <img src={imgUrl} className="card-img-top" alt="..." /> : null}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{props.item.body}</p>
      </div>
      <div className="card-body">
        <h5 className="card-title">{price}</h5>
        <p className="card-text">{props.item.body}</p>
      </div>
    </div>
  );
}

export default Card;
