import styled from 'styled-components';
import { ReactComponent as StarEmpty } from '../../../asset/svg/star-empty.svg';
import { ReactComponent as StarFull } from '../../../asset/svg/star-full.svg';
import { THEME_COLOR, spacing, THEME_SIZE, THEME_VALUE } from '../../theme';

export function Rating(props) {
  const { value } = props;
  return (
    <Container>
      {[1, 2, 3, 4, 5].map((item, index) =>
        value === 0 ? (
          <StarEmpty key={index} />
        ) : (
          <Star key={index} rating={value >= item ? 1 : 0} />
        ),
      )}
    </Container>
  );
}

const Star = styled(StarFull)`
  fill: ${(p) => p.rating && THEME_COLOR.TEXT.WARNING};
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: ${spacing(1)};
`;
