import styled from 'styled-components';
import { THEME_COLOR, spacing, THEME_SIZE } from '../../lib/theme';
import { PrimaryTitleText, SecondaryText } from '../../lib/elements/text';
import {
  CompanyMembersHeader,
  CompanyMembersList,
  CompanyMembersModalForm,
  CompanyMembersForm,
  CompanyMembersModalMenu,
} from './frames';
import { SectionLayout } from '../../lib/elements/layout';
import { PrimaryLoader } from '../../lib/elements/loader';
import { ModalPopup, Popover } from '../../lib/elements/modal';
import { Formik } from 'formik';
import { useState } from 'react';

export function CompanyMembersComponent(props) {
  const {
    isPending,
    pageLoading,
    isError,
    isSuccess,
    errorMessage,

    companyInfo,

    companyMembersListData,

    userRoleSelectName,
    userRoleSelectOption,
    initialValueFormModalForm,
    onSubmitForModalForm,

    userRemove,
    userChangeRole,
    userComplain,

    isPopoverOpen,
    openPopover,
    closePopover,

    isModalOpen,
    openModal,
    closeModal,

    username,

    initialValueForInviteUserForm,
    inviteUserFieldName,
    onSubmitForInviteUserForm,
  } = props;

  return (
    <>
      {(isPending || pageLoading) && <PrimaryLoader />}
      <Container type="LARGE">
        <CompanyMembersHeader companyName={companyInfo?.companyName} />

        <CompanyMembersList
          openPopover={openPopover}
          companyMembersListData={companyMembersListData}
        />

        <ModalPopup isOpen={isModalOpen} close={closeModal}>
          <Formik
            initialValues={initialValueFormModalForm}
            onSubmit={onSubmitForModalForm}
          >
            {(formProps) => (
              <CompanyMembersModalForm
                userRoleSelectName={userRoleSelectName}
                userRoleSelectOption={userRoleSelectOption}
                username={username}
                closeModal={closeModal}
                {...formProps}
              />
            )}
          </Formik>
        </ModalPopup>

        <Popover anchorEl={isPopoverOpen} onClose={closePopover}>
          <CompanyMembersModalMenu
            userRemove={userRemove}
            userChangeRole={userChangeRole}
            userComplain={userComplain}
          />
        </Popover>
        <Formik
          initialValues={initialValueForInviteUserForm}
          onSubmit={onSubmitForInviteUserForm}
        >
          {(formProps) => (
            <CompanyMembersForm
              inviteUserFieldName={inviteUserFieldName}
              {...formProps}
            />
          )}
        </Formik>
      </Container>
    </>
  );
}

const Container = styled(SectionLayout)`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex-grow: 1;
`;
