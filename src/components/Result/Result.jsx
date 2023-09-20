import "../Result/Result.css";
const Result = (props) => {
  return (
    <div className="card-result">
      <img
        className="mobile"
        src="/images/illustration-thank-you.svg"
        alt="image of mobile"
      ></img>
      <div className="selected-div">
        <h1 className="selected">You selected {props.number} out of 5</h1>
      </div>
      <h1 className="thanks">Thank you!</h1>
      <p className="comment-result">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default Result;
