import styled from 'styled-components';
import { ReactComponent as StarIcon } from '../../../asset/svg/star.svg';
import { THEME_COLOR, spacing, THEME_SIZE, THEME_VALUE } from '../../theme';

export function Rating(props) {
  const { value } = props;
  return (
    <Container>
      {[1, 2, 3, 4, 5].map((item, index) =>
        value === 0 ? (
          <StarEmpty key={index} />
        ) : (
          <StarFull key={index} rating={value >= item ? 1 : 0} />
        ),
      )}
    </Container>
  );
}
const StarFull = styled(StarIcon)`
  fill: ${(p) => p.rating && THEME_COLOR.TEXT.WARNING};
`;
const StarEmpty = styled(StarIcon)`
  fill: none;
  stroke: #b5b5b5;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: ${spacing(1)};
`;
