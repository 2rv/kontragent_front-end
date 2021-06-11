import { AdvertBlockComponent } from './advert-block.component';

export function AdvertBlockContainer(props) {
  return <AdvertBlockComponent advertImageURL={props.advertImageURL} />;
}
