import Grid from '@mui/material/Grid';
import { text } from '../../../lib/common/text';
import { TextFieldElement } from '../../../lib/element/text-field.element';
import { FileUploadFieldContainer } from '../../../lib/common/file-upload-field/file-upload-field.container';
import { COMPANY_ACCOUNT_ITEM_REVISION_KONTRAGENT_CREATE_DATA_NAME as FIELD_NAME } from '../company-account-item-revision-kontragent-create.constant';

export function CompanyAccountItemRevisionKontragentCreateFormComponent(props) {
  const {
    handleChange,
    handleBlur,
    setFieldValue,
    errors,
    touched,
    value,
    index,
  } = props;

  const prefix = `${FIELD_NAME.KONTRAGENTS}.${index}.`;

  const isFieldError = (name) => {
    return (
      errors[FIELD_NAME.KONTRAGENTS]?.[index]?.[name] &&
      touched[FIELD_NAME.KONTRAGENTS]?.[index]?.[name] &&
      errors[FIELD_NAME.KONTRAGENTS]?.[index]?.[name]
    );
  };

  const getFieldError = (name) =>
    isFieldError(name) && errors[FIELD_NAME.KONTRAGENTS]?.[index]?.[name];

  return (
    <Grid container spacing={4}>
      <Grid item>
        <TextFieldElement
          placeholder={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.FORM.FIELD.LABELS.COMPANY_INFO',
          )}
          name={prefix + FIELD_NAME.DESCRIPTION}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value[FIELD_NAME.DESCRIPTION]}
          error={isFieldError(FIELD_NAME.DESCRIPTION)}
          errorText={getFieldError(FIELD_NAME.DESCRIPTION)}
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
              prefix + FIELD_NAME.FILE_ID_LIST,
              value.map((i) => i.id),
            );
          }}
          onFileDelete={(value) => {
            setFieldValue(
              prefix + FIELD_NAME.FILE_ID_LIST,
              value.map((i) => i.id),
            );
          }}
        />
      </Grid>
    </Grid>
  );
}
