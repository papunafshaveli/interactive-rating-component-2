import { useState } from "react";
import "../Rate/Rate.css";
const Rate = (props) => {
  let rateNumbers = [1, 2, 3, 4, 5];

  return (
    <div className="card">
      <div className="star-image-div">
        <img
          className="star-image"
          src="/images/icon-star.svg"
          alt="star icone"
        />
      </div>
      <h1 className="question">How did we do?</h1>
      <p className="comment">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rate-numbers">
        {rateNumbers.map((item) => {
          return (
            <button
              style={
                props.number == item
                  ? { backgroundColor: "#7C8798", color: "white" }
                  : {}
              }
              key={item}
              onClick={() => {
                props.setNumber(item);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => {
          {
            if (props.number) props.setSubmit(true);
          }
        }}
        className="submit"
      >
        SUBMIT
      </button>
    </div>
  );
};

export default Rate;
