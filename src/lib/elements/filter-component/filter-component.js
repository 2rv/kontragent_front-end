import styled from 'styled-components';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../theme';
import { PrimaryField, SelectField } from '../field';
import { ReactComponent as FindIcon } from '../../../asset/svg/find-icon-15x15.svg';
import { PrimaryTitleText } from '../text';

export function FilterComponent(props) {
  const { titleTid, children, selectOption, placeholderTid, icon } = props;

  const Icon = icon || FindIcon;
  return (
    <Container>
      <HeaderCase>
        <Title tid={titleTid} />
        {children}
      </HeaderCase>
      <InputCase>
        <FieldCase>
          <Field placeholderTid={placeholderTid} />
          <IconCase>
            <Icon />
          </IconCase>
        </FieldCase>
        <SelectField option={selectOption} />
      </InputCase>
    </Container>
  );
}
const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;
const IconCase = styled.div`
  position: absolute;
  right: ${spacing(4.5)};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Field = styled(PrimaryField)`
  background-color: ${THEME_COLOR.COLOR.BASE};
`;
const FieldCase = styled.div`
  position: relative;
  align-items: center;
  display: grid;
`;
const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputCase = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 229px);
  gap: ${spacing(4.5)};
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4.5)};
`;
