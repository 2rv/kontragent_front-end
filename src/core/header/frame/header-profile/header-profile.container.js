import { HeaderProfileComponent } from './header-profile.component';

export function HeaderProfileContainer(props) {
  return <HeaderProfileComponent imageURL={props.imageURL} />;
}
