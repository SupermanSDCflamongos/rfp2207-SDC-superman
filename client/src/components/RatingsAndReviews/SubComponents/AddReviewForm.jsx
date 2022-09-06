import React from "react";
import { useState } from "react";
import RatingStars from "../../Overview/ProductDetails/RatingStars.jsx";
import ReviewFormRadio from "./ReviewFormRadio.jsx";

const AddReviewForm = ({ meta }) => {
  console.log(meta, "....");
  const [userRating, setUserRating] = useState(0);
  const [reviewChars, setReviewChars] = useState("");
  const [userImgs, setUserImgs] = useState([]);

  const handleClick = (e) => {
    let userScore = e.target.getAttribute("attr");
    setUserRating(userScore);
  };

  const handleChange = (e) => {
    setReviewChars(e.target.value);
  };

  const handleImgUpload = (e) => {
    console.log(e.target.files);
    Object.values(e.target.files).map((file) => {
      console.log(file.name);
    });

    // setUserImgs()
  };

  let userRatingTerms = {
    1: "Poor",
    2: "Fair",
    3: "Average",
    4: "Good",
    5: "Great",
  };

  const userRatingRadioVals = {
    Size: [
      "A size too small",
      "1/2 a size too small",
      "Perfect",
      "1/2 a size too big",
      "A size too big",
    ],
    Width: [
      "Too narrow",
      "Slightly narrow",
      "Perfect",
      "Slightly wide",
      "Too wide",
    ],
    Comfort: [
      "Uncomfortable",
      "Slightly uncomfortable",
      "Ok",
      "Comfortable",
      "Perfect",
    ],
    Quality: [
      "Poor",
      "Below average",
      "What I expected",
      "Pretty great",
      "Perfect",
    ],
    Length: [
      "Runs short",
      "Runs slightly short",
      "Perfect",
      "Runs slightly long",
      "Runs long",
    ],
    Fit: [
      "Runs tight",
      "Runs slightly tight",
      "Perfect",
      "Runs slightly long",
      "Runs long",
    ],
  };

  let characteristics = Object.keys(meta.characteristics);
  console.log(characteristics);

  return (
    <div className="RR_modal-form">
      <h3 id="RR_review-form-title">Write a Review for "PRODUCT???"</h3>
      <div>
        <span>Overall Rating</span>
        <div onClick={(e) => handleClick(e)}>
          <RatingStars rating={userRating} />
          {userRating ? <span>{userRatingTerms[userRating]}</span> : null}
        </div>
      </div>
      <form>
        <p>Do you recommend this product ?</p>
        <div>
          <input type="radio" id="yes" name="recommend" value="yes"></input>
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="recommend" value="no"></input>
          <label htmlFor="no">No</label>
        </div>
      </form>
      <div>
        {characteristics.map((char, i) => {
          return (
            <div key={`${char}`}>
              <ReviewFormRadio chars={characteristics} char={char} index={i} />
            </div>
          );
        })}
      </div>
      <div className="RR_user-review-summary-container">
        <span>Review Summary</span>
        <form>
          <input
            className="RR_user-review-summary"
            type="text"
            placeholder="Example: Best purchase ever"
            maxLength="60"
          ></input>
        </form>
      </div>
      <div className="RR_user-review-body-container">
        <form>
          <textarea
            className="RR_user-review-body"
            type="text"
            rows="30"
            cols="55"
            value={reviewChars}
            placeholder="Why did you like the product or not?"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </form>
        <div>
          {50 - reviewChars.length >= 0 ? (
            <span>
              Minimum required characters left: {50 - reviewChars.length}
            </span>
          ) : (
            <span>Minimum reached</span>
          )}
        </div>
      </div>
      <div>
        <div>
          {userImgs.length >= 5 ? null : (
            <input
              type="file"
              id="files"
              multiple="multiple"
              accept="image/*"
              onChange={(e) => handleImgUpload(e)}
            ></input>
          )}
        </div>
        <div>
          {userImgs.map((img) => {
            return <img className="RR_form-thumbnail" src={`${img.name}`} />;
          })}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Example: jackson11!"
          maxLength="60"
        ></input>
        <small>
          For privacy reasons, do not use your full name or email address
        </small>
      </div>
      <div>
        <input
          type="email"
          placeholder="Example: jackson11@email.com"
          maxLength="60"
        ></input>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default AddReviewForm;

//can do max chars with input type=text not with textarea
