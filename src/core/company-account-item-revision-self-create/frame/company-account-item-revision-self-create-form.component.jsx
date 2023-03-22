import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { text } from '../../../lib/common/text';
import { TextFieldElement } from '../../../lib/element/text-field.element';
import { FileUploadFieldContainer } from '../../../lib/common/file-upload-field/file-upload-field.container';
import { COMPANY_ACCOUNT_ITEM_REVISION_SELF_CREATE_DATA_NAME as FIELD_NAME } from '../company-account-item-revision-self-create.constant';

export function CompanyAccountItemRevisionSelfCreateFormComponent(props) {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const getFieldError = (name) => isFieldError(name) && errors[name];

  return (
    <Grid container spacing={4}>
      <Grid
        item
        display="flex"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-end"
        zIndex={0}
      >
        <Typography
          variant="title"
          children={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.FORM.TITLE',
          )}
        />

        <Tooltip
          arrow
          componentsProps={{
            tooltip: { sx: { backgroundColor: '#3AB8FF' } },
            arrow: { sx: { color: '#3AB8FF' } },
          }}
          title={
            <Typography
              variant="body1"
              color="white"
              children={text(
                'Здесь вы можете указать сведения для проведения проверки, а так же прикрепить файлы которые в этом помогут',
              )}
            />
          }
          children={<HelpOutlineOutlinedIcon sx={{ ml: 1 }} fontSize="small" />}
        />
      </Grid>

      <Grid item>
        <TextFieldElement
          placeholder={text(
            'COMPANY_ACCOUNT_ITEM_REVISION_CREATE.REVISON_CREATE_COMPANY_INFO.FORM.FIELD.LABELS.COMPANY_INFO',
          )}
          name={FIELD_NAME.DESCRIPTION}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[FIELD_NAME.DESCRIPTION]}
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
              FIELD_NAME.FILE_ID_LIST,
              value.map((i) => i.id),
            );
          }}
          onFileDelete={(value) => {
            setFieldValue(
              FIELD_NAME.FILE_ID_LIST,
              value.map((i) => i.id),
            );
          }}
        />
      </Grid>
    </Grid>
  );
}
