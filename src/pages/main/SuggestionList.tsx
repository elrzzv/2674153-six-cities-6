import { TOffer } from '../../types';
import CitiesCard from './CitiesCard';

type SuggestionListProps = {
  offersNumber: number;
  offers: TOffer[];
  onCardHover?: (itemName: string | null) => void;
}

export default function SuggestionList({ offersNumber, offers, onCardHover }: SuggestionListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((o, i) => (
        (i < offersNumber) &&
        <CitiesCard
          offer={o}
          onCardHover={onCardHover}
          key={o.id}
        />
      ))}
    </div>
  );
}
