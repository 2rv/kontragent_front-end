import styled from 'styled-components';

import { SecondaryText } from '../text/secondary.text';

import { FormProposalPropsType } from './type.proposal';
import { PrimaryLink } from '../link';

import { spacing } from '../../theme'
// import { THEME_SIZE, THEME_COLOR } from '../../theme';
// import { text } from '../../common/text';

export function FormProposalText(props: FormProposalPropsType) {
  const { text_tid, link_tid, link_pathname, link_config } = props;
  return (
    <div>
      <FormProposalMessage tid={text_tid} />
      <PrimaryLink tid={link_tid} pathname={link_pathname} config={link_config} />
    </div>
  );
}

const FormProposalMessage = styled(SecondaryText)`
  padding-right: ${spacing(1)};
`;
