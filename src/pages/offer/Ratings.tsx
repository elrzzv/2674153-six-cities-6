import { Fragment } from 'react';

type RatingsProps ={
  rating: string;
  setRating: (newRating: string) => void;
}

export default function Ratings({rating, setRating}: RatingsProps): JSX.Element {
  const allRatings = [
    {value: '5', title: 'perfect'},
    {value: '4', title: 'good'},
    {value: '3', title: 'not bad'},
    {value: '2', title: 'badly'},
    {value: '1', title: 'terribly'}
  ];

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(event.target.value);
  };

  return(
    <div className="reviews__rating-form form__rating">
      {allRatings.map((star) => (
        <Fragment key={star.value}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={star.value}
            id={`${star.value}-stars`}
            type="radio"
            checked={rating === star.value}
            onChange={handleRatingChange}
          />
          <label htmlFor={`${star.value}-stars`} className="reviews__rating-label form__rating-label" title={star.title}>
            <svg className="form__star-image" width="37" height="33">
              <use href="#icon-star"></use>
            </svg>
          </label>
        </Fragment>
      ))}
    </div>
  );
}
