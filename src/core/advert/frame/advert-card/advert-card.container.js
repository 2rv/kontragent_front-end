import { AdvertCardComponent } from './advert-card.component';

export function AdvertCardContainer(props) {
  return <AdvertCardComponent advertImageURL={props.advertImageURL} />;
}
