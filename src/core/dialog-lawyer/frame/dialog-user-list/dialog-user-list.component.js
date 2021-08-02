import styled from 'styled-components';

import { DialogLawyerItemComponent } from './dialog-lawyer-item.component';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_SIZE } from '../../../../lib/theme';
import { SecondaryInput } from '../../../../lib/elements/input';

export function DialogUserListComponent({ dialogLawyersListData }) {
  return (
    <Container>
      <Header>
        <Title tid="DIALOGS.DIALOG_LIST.TITLE" />
        <SecondaryInput placeholder="Найти диалог или сообщение" />
      </Header>
      <List>
        {dialogLawyersListData.map((data, index) => (
          <DialogLawyerItemComponent key={index} data={data} />
        ))}
      </List>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 400px;
  flex-grow: 1;
  gap: ${spacing(4)};
  padding: ${spacing(8)} ${spacing(3.5)} ${spacing(8)} ${spacing(8)};
`;
const Header = styled.div`
  display: grid;
  gap: ${spacing(4)};
  padding-right: ${spacing(4.5)};
`;
const Line = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 167px;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-grow: 1;
  overflow: auto;
  gap: ${spacing(4)};
  padding-right: ${spacing(4)};
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
`;
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
