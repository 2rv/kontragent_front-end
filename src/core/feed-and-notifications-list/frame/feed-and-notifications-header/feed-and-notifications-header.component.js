import styled from 'styled-components';
import { SecondarySelect } from '../../../../lib/elements/field';
import { SecondaryInput } from '../../../../lib/elements/input';
import { PrimaryTitleText } from '../../../../lib/elements/text';
import { spacing, THEME_COLOR, THEME_SIZE } from '../../../../lib/theme';

export function FeedAndNotificationsHeaderComponent(props) {
  const {
    isPending,
    isError,
    isSuccess,
    pageLoading,
    errorMessage,
    feedAndNotificationsSelectOption,
  } = props;
  return (
    <Container>
      <HeaderCase>
        <Title tid="Лента и уведомения" />
      </HeaderCase>
      <InputCase>
        <SecondaryInput placeholder="Найти уведомление" />
        {feedAndNotificationsSelectOption && (
          <SecondarySelect option={feedAndNotificationsSelectOption} />
        )}
      </InputCase>
    </Container>
  );
}

const Title = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
`;

const HeaderCase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputCase = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 226px);
  gap: ${spacing(4)};
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`;
