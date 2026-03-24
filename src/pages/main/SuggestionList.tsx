import { offersType } from '../../mock/offers';
import CitiesCard from './CitiesCard';

type SuggestionListProps = {
  offersNumber: number;
  offers: offersType;
  setHoveredCardId?: (offerId: string | null) => void;
}

export default function SuggestionList({offersNumber, offers, setHoveredCardId} : SuggestionListProps) : JSX.Element {

  const handleCardHover = (offerId: string | null) => {
    setHoveredCardId?.(offerId);
  };

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((o, ind) => (
        ind < offersNumber ? <CitiesCard offer={o} onCardHover={handleCardHover} key={o.id} /> : null
      ))}
    </div>
  );
}
