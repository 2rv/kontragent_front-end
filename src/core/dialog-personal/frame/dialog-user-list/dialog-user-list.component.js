import styled from 'styled-components';

import { DialogUserListItemComponent } from './dialog-user-list-item.component';
import { IndentLayout, SectionLayout } from '../../../../lib/elements/layout';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_SIZE,
  THEME_COLOR,
  THEME_VALUE,
} from '../../../../lib/theme';
import { SecondarySelect } from '../../../../lib/elements/field';
import { SecondaryInput } from '../../../../lib/elements/input';

export function DialogUserListComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    errorMessage,
    pageLoading,
    dialogPersonalUserListData,
    selectOption,
  } = props;
  return (
    <Container>
      <Header>
        <Line>
          <Title tid="DIALOGS.DIALOG_LIST.TITLE" />
          <SecondarySelect option={selectOption} />
        </Line>
        <SecondaryInput placeholder="Найти диалог или сообщение" />
      </Header>
      <List>
        {dialogPersonalUserListData.map((data, index) => (
          <DialogUserListItemComponent key={index} data={data} />
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
  gap: ${spacing(6)};
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
