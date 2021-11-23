import React from 'react';
import { useDispatch } from 'react-redux';

import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { TextFieldElement } from '../../../lib/element/text-field.element.js';

import { COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_COMPANY_INFO_FIELD_NAME } from '../company-account-item-self-revision-create-company-info.constant';

import { FileUploadFieldContainer } from '../../../lib/common/file-upload-field/file-upload-field.container.js';
import { text } from '../../../lib/common/text';

import { setRevisionInfoValid } from '../../company-account-item-self-revision-create';

export const CompanyAccountItemSelfRevisionCreateCompanyInfoFormComponent = (
  props,
) => {
  const {
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isValid,
    companyId,
    companyAccountItemRevisionChangeCompanyName,
    companyAccountItemRevisionChangeCompanyINN,
    companyAccountItemRevisionChangeCompanyDescription,
    companyAccountItemRevisionChangeFileList,
    filedata,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const dispatch = useDispatch();

  const isCompanyInfoFormValid = () => {
    return JSON.stringify(touched) === '{}' ? false : isValid;
  };
  React.useEffect(() => {
    dispatch(setRevisionInfoValid(companyId, isCompanyInfoFormValid()));
  }, [touched, isValid]);

  const getFieldError = (name) => isFieldError(name) && errors[name];

  return (
    <form>
      <Grid rowSpacing={4} container>
        <Grid item>
          <Grid
            spacing={3}
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Grid item xs={12}>
              <Typography variant="title" component="div">
                {text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.FORM.TITLE',
                )}
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <TextFieldElement
                placeholder={text(
                  'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.FORM.FIELD.LABELS.COMPANY_INFO',
                )}
                name={
                  COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.DESCRIPTION
                }
                onChange={handleChange}
                storeOnChange={
                  companyAccountItemRevisionChangeCompanyDescription
                }
                onBlur={handleBlur}
                value={
                  values[
                    COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_COMPANY_INFO_FIELD_NAME
                      .DESCRIPTION
                  ]
                }
                error={isFieldError(
                  COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.DESCRIPTION,
                )}
                fullWidth
                errorText={getFieldError(
                  COMPANY_ACCOUNT_ITEM_SELF_REVISION_CREATE_COMPANY_INFO_FIELD_NAME.DESCRIPTION,
                )}
                multiline
                minRows={4}
                maxRows={20}
              />
            </Grid>
            <Grid item xs={12}>
              <FileUploadFieldContainer
                storeOnFileChange={companyAccountItemRevisionChangeFileList}
                filedata={filedata}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
