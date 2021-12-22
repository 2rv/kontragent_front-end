import { useSelector } from "react-redux";
import { NAVIGATION_STORE_NAME } from "../../lib/common/navigation";
import { LandingHeaderDesktopComponent } from "./landing-header-desktop.component";

export function LandingHeaderContainer() {
  const { activePath } = useSelector((state) => ({
    activePath: state[NAVIGATION_STORE_NAME].activePath,
  }));

  return (
    <LandingHeaderDesktopComponent
      activePath={activePath}
      headerLinks={HEADER_LINKS}
    />
  );
}

export const HEADER_LINKS = [
  {
    path: '/landing',
    name: 'Главная',
  },
  {
    path: '',
    name: 'О проекте',
  },
  {
    path: '',
    name: 'Наши преимущества',
  },
  {
    path: '',
    name: 'Наши принципы',
  },
];
