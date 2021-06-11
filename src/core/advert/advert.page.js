import {
  ContentLayout,
  IndentLayout,
  PageLayout,
} from '../../lib/elements/layout/index';
import { AdvertContainer } from './advert.container';

export function AdvertPage() {
  return (
    <PageLayout align="CENTER">
      <IndentLayout>
        <AdvertContainer />
      </IndentLayout>
    </PageLayout>
  );
}
