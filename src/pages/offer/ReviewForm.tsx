import { useState } from 'react';

import Ratings from './Ratings';

export default function ReviewForm(): JSX.Element {

  const MIN_COMMENT_LENGTH = 50;
  const MAX_COMMENT_LENGTH = 1000;

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  const sendReview = (event: React.FormEvent) => {
    event.preventDefault();
    setComment('');
    setRating('');
  };

  const isValid = () => {
    const length = comment.length;
    return (MIN_COMMENT_LENGTH <= length && MAX_COMMENT_LENGTH >= length && rating);
  };

  return(
    <form className="reviews__form form" action="#" method="post"
      onSubmit={sendReview}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <Ratings rating={rating} setRating={setRating} />

      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={!isValid()}
        >
          Submit
        </button>
      </div>

    </form>
  );
}
