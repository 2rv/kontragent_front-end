import styled from 'styled-components';

import { NewLawyerRequestFormContainer } from './frame/new-lawyer-request-form';

import { PrimaryTitleText, SecondaryText } from '../../lib/elements/text';
import { spacing, THEME_SIZE } from '../../lib/theme';

export function LawyerReqeustComponent(props) {
  return (
    <div>
      <div>
        <LawyerRequestQuestionTitle tid="Задать вопрос юристам" />
        <LawyerRequestQuestionDescription>Задача организации, в особенности же начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий.</LawyerRequestQuestionDescription>
      </div>
      <NewLawyerRequestFormContainer {...props} />
    </div>
  );
}

const LawyerRequestQuestionTitle = styled(PrimaryTitleText)`
  font-size: ${THEME_SIZE.FONT.HUGE};
  margin-bottom: ${spacing(3)};
`;

const LawyerRequestQuestionDescription = styled(SecondaryText)`
  line-height: 21px;
`;
