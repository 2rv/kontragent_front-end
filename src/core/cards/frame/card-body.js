import styled from 'styled-components';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../lib/theme';
import { PrimaryDivider } from '../../../lib/elements/divider';

export function CardBody(props) {
  const { title, action, content } = props;
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Action>{action}</Action>
      </Header>
      <PrimaryDivider />
      <Content>{content}</Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(2)};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${spacing(2)};
`;
const Title = styled.div`
  display: flex;
  align-items: baseline;
  min-width: max-content;
`;
const Action = styled.div`
  display: flex;
  min-width: max-content;
`;
const Content = styled.div`
  display: flex;
  gap: ${spacing(3)};
  align-items: center;
`;
