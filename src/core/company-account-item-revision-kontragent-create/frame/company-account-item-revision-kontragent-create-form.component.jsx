import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { text } from '../../../lib/common/text';
import { TextFieldElement } from '../../../lib/element/text-field.element';
import { FileUploadFieldContainer } from '../../../lib/common/file-upload-field/file-upload-field.container';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME } from '../company-account-item-revision-kontragent-create.constant';

export function CompanyAccountItemRevisionKontragentCreateFormComponent(props) {
  const {
    handleChange,
    handleBlur,
    setFieldValue,
    errors,
    touched,
    value,
    prefix,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const getFieldError = (name) =>
    isFieldError(prefix + name) && errors[prefix + name];

  return (
    <Grid container spacing={4}>
      <Grid item>
        <TextFieldElement
          placeholder={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.FORM.FIELD.LABELS.COMPANY_INFO',
          )}
          name={
            prefix +
            COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.DESCRIPTION
          }
          onChange={handleChange}
          onBlur={handleBlur}
          value={
            value[
              COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME
                .DESCRIPTION
            ]
          }
          error={isFieldError(
            COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.DESCRIPTION,
          )}
          errorText={getFieldError(
            COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.DESCRIPTION,
          )}
          fullWidth
          multiline
          minRows={4}
          maxRows={20}
        />
      </Grid>

      <Grid item>
        <FileUploadFieldContainer
          onFileAdd={(value) => {
            setFieldValue(
              prefix +
                COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.FILE_ID_LIST,
              value.map((i) => i.id),
            );
          }}
          onFileDelete={(value) => {
            setFieldValue(
              prefix +
                COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME.FILE_ID_LIST,
              value.map((i) => i.id),
            );
          }}
        />
      </Grid>
    </Grid>
  );
}

// <Alert
//   severity="error"
//   children={text('CHANGE.EMPRY COMPANY LIST')}
// />
// <Button
//   variant="black"
//   fullWidth
//   children={text(
//     'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_LIST.BUTTON',
//   )}
// />
//  <Button
// color="error"
// variant="red"
// fullWidth
// children={text(
//   'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_ITEM.BUTTON',
// )}
// />
