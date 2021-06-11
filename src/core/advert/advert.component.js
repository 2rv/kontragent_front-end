import { AdvertBlockContainer } from './frame/advert-block';
import { AdvertBarContainer } from './frame/advert-bar';
import { AdvertCardContainer } from './frame/advert-card';

import { ADVERT_TYPE } from './advert.type';

export function AdvertComponent(props) {
  const getAdvertFrameContainer = (type = 'BAR') => {
    switch (type) {
      case ADVERT_TYPE.BLOCK:
        return <AdvertBlockContainer advertImageURL={props.advertImageURL} />;
      case ADVERT_TYPE.BAR:
        return <AdvertBarContainer advertImageURL={props.advertImageURL} />;
      case ADVERT_TYPE.CARD:
        return <AdvertCardContainer advertImageURL={props.advertImageURL} />;
    }
  };

  return getAdvertFrameContainer(props.type);
}
