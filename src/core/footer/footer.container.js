import { FooterComponent } from './footer.component';
import { useSelector } from 'react-redux';
import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation/navigation.constant';
import { FOOTER_ITEMS } from './footer.constant';
export function FooterContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  return <FooterComponent activePath={activePath} footerItems={FOOTER_ITEMS} />;
}
