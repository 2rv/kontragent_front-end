import { SidebarComponent } from './sidebar.component';

export function SidebarContainer(props) {
  const { toggle } = props;
  return <SidebarComponent toggle={toggle} />;
}
