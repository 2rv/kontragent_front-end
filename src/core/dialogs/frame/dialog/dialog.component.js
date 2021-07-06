import styled from 'styled-components';

import { PrimaryText } from '../../../../lib/elements/text';
import { spacing, THEME_VALUE, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';

export function DialogComponent() {
  return (
    <DialogLayout>
      <DialogHeader>
        <Content>
          <Name>John Cena</Name>
          <Status statusId={1}>Агент</Status>
        </Content>
      </DialogHeader>
    </DialogLayout>
  );
}

// height: calc(100vh - 95px - 64px);

const DialogLayout = styled.div`
  background: ${THEME_COLOR.COLOR.BASE};
`;

const DialogHeader = styled.div`
  padding: ${spacing(6)};
`;

const Content = styled.div`
  display: inline-flex;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: ${spacing(2)};
  align-items: center;
`;

const Name = styled(PrimaryText)`
  font-weight: ${THEME_VALUE.FONT_WEIGHT.MEDIUM};
`;

const Status = styled.span`
  font-size: ${THEME_SIZE.FONT.DEFAULT};
  font-weight: ${THEME_VALUE.FONT_WEIGHT.SEMY_BOLD};
  color: ${(props) => {
    switch (props.statusId) {
      case 0:
        return THEME_COLOR.TEXT.ACCENT;
      case 1:
        return THEME_COLOR.TEXT.VALIDATION;
      case 2:
        return THEME_COLOR.TEXT.SUCCESS;
      default:
        return THEME_COLOR.COLOR.ACCENT;
    }
  }};
`;
