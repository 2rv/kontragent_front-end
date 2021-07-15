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
    <IndentLayout>
      <SectionLayout type="LARGE">
        <SectionLayout type="LARGE">
          <Line>
            <Title tid="DIALOGS.DIALOG_LIST.TITLE" />
            <SecondarySelect option={selectOption} />
          </Line>
          <Field placeholder="Найти диалог или сообщение" />
        </SectionLayout>
        <SectionLayout>
          {dialogPersonalUserListData.map((data, index) => (
            <DialogUserListItemComponent key={index} data={data} />
          ))}
        </SectionLayout>
      </SectionLayout>
    </IndentLayout>
  );
}
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
