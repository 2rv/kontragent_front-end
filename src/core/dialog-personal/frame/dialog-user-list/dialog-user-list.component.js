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
import { PrimaryInput } from '../../../../lib/elements/input';

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
    <Container type="LARGE">
      <Header type="LARGE">
        <Line>
          <Title tid="DIALOGS.DIALOG_LIST.TITLE" />
          <SecondarySelect option={selectOption} />
        </Line>
        <Field placeholder="Найти диалог или сообщение" />
      </Header>
      <List>
        {dialogPersonalUserListData.map((data, index) => (
          <DialogUserListItemComponent key={index} data={data} />
        ))}
      </List>
    </Container>
  );
}
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-right: ${spacing(6)};
  gap: ${spacing(6)};
`;
const Container = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  overflow: hidden;
  grid-template-rows: 116px auto;
  gap: ${spacing(6)};
  padding: ${spacing(6)} 0 ${spacing(6)} ${spacing(6)};
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: ${spacing(6)};
  padding-right: ${spacing(6)};
`;
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  margin-right: ${spacing(13)};
`;
const Line = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 170px;
`;
const Field = styled(PrimaryInput)`
  width: 100%;
  height: 46px;
  background-color: ${THEME_COLOR.COLOR.BASE};
`;
