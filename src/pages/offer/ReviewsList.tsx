import { JSX } from 'react';
import { TComment } from '../../types';
import Review from './Review';

type ReviewsListProps = {
  reviews: TComment[];
}

export default function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews.map((review) =>
          <Review key={review.id} review={review} />
        )
      }
    </ul>
  );
}
