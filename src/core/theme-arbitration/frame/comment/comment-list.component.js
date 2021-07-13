import styled from 'styled-components';
import { PrimaryText, SecondaryText } from '../../../../lib/elements/text';
import {
  spacing,
  THEME_COLOR,
  THEME_SIZE,
  THEME_VALUE,
} from '../../../../lib/theme';
import { PrimaryDivider } from '../../../../lib/elements/divider';
import { CommentItemComponent } from './comment-item.component';

export function CommentListComponent(props) {
  const { dataComment } = props;
  return (
    <Container>
      {dataComment.map((item, index) => (
        <CommentItemComponent key={item?.id || index} {...item} />
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  gap: ${spacing(4)};
  align-items: flex-start;
  flex-direction: column;
`;
