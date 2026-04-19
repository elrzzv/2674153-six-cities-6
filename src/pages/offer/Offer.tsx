import { Helmet } from 'react-helmet-async';
import ReviewForm from './ReviewForm';
import Header from '../../components/header/Header';
import { useState } from 'react';
//import { Navigate, useParams } from 'react-router-dom';
//import { Paths } from '../../const';
import { comments } from '../../mock/comments';
import { offer } from '../../mock/offer';
import { offers } from '../../mock/offers';
import { CITY } from '../../mock/cities';
import { POINTS } from '../../mock/offers';
import ReviewsList from './ReviewsList';
import Map from '../../components/map/Map';
import SuggestionList from '../main/SuggestionList';
import { TPoint } from '../../types';


function Offer(): JSX.Element {
  /*
  const { offerId } = useParams();
  const offer = offers.find((o) => o.id === offerId);
  if (!offer) {
    return <Navigate to={Paths.NotFound} />;
  }
  */

  const [selectedPoint, setSelectedPoint] = useState<TPoint | null>(null);

  const handleCardHover = (itemName: string | null) => {
    if (!itemName) {
      setSelectedPoint(null);
    }
    const currentPoint = POINTS.find((point) =>
      point.title === itemName,
    );
    setSelectedPoint(currentPoint as TPoint);
  };

  return (
    <div className="page">

      <Helmet>
        <title>6 cities - Offer</title>
      </Helmet>

      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                offer.images.map((image, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div className="offer__image-wrapper" key={i}>
                    <img className="offer__image" src={image} alt="Photo studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                offer.isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )
              }

              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    offer.goods.map((good, i) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <li key={i} className="offer__inside-item">
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {
                    offer.host.isPro && (
                      <span className="offer__user-status">
                        Pro
                      </span>
                    )
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot;
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ReviewsList reviews={comments} />

                <ReviewForm />

              </section>
            </div>
          </div>

          <Map
            city={CITY}
            points={POINTS}
            block='offer'
            selectedPoint={selectedPoint}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <SuggestionList
                offersNumber={offers.length - 1}
                offers={offers.filter((offerItem) => offerItem.id !== offer.id)}
                onCardHover={handleCardHover}
                block="near-places"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
