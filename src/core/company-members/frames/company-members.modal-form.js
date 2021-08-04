import styled from 'styled-components';
import { SectionLayout } from '../../../lib/elements/layout';
import { SecondaryTitleText, SecondaryText } from '../../../lib/elements/text';
import { PrimarySelect } from '../../../lib/elements/field';
import { PrimaryButton, BasicButton } from '../../../lib/elements/button';
import { ErrorAlert } from '../../../lib/elements/alert';
import { SuccessAlert } from '../../../lib/elements/alert';
import { PrimaryLoader } from '../../../lib/elements/loader';
import { spacing, THEME_COLOR } from 'src/lib/theme';

export function CompanyMembersModalForm(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    isSubmitting,

    userRoleSelectName,
    userRoleSelectOption,
    username,
    closeModal,
  } = props;
  return (
    <Container type="LARGE">
      <Header type="MEDIUM">
        <SecondaryTitleText tid="Выберите роль" />
        <SectionLayout type="SMALL">
          <SecondaryText>
            Ваше приглашение отправлено {<Username tid={username} />}.
          </SecondaryText>
          <SecondaryText>
            Пользователь получит выбранную вами роль приняв его.
          </SecondaryText>
        </SectionLayout>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Content type="MEDIUM">
          <PrimarySelect
            name={userRoleSelectName}
            option={userRoleSelectOption}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[userRoleSelectName]}
          />
          <PrimaryButton tid="Выбрать" />
          <CancelButton type="button" tid="Отменить" onClick={closeModal} />
          {/* {(isError || errorMessage) && (
            <ErrorAlert tid={`ERROR.${errorMessage}`} />
          )}
          {isSuccess && <SuccessAlert tid={'SETTINGS.2FA.SUCCESS_MESSAGE'} />} */}
        </Content>
      </Form>
    </Container>
  );
}
const CancelButton = styled(BasicButton)`
  color: ${THEME_COLOR.TEXT.SECONDARY};
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
`;
const Content = styled(SectionLayout)`
  width: 300px;
`;
const Header = styled(SectionLayout)`
  text-align: center;
`;
const Container = styled(SectionLayout)`
  width: 410px;
`;
const Username = styled(SecondaryText)`
  color: ${THEME_COLOR.TEXT.PRIMARY};
`;
