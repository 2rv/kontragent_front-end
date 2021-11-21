// import { FieldLayout, SectionLayout } from '../../../lib/element/layout';
// import { ButtonPrimary, ButtonSecondary } from '../../../lib/element/button';
// import {
//   BasicField,
//   MultiField,
//   FieldCheckbox,
// } from '../../../lib/element/field';
import { ARTICLE_FIELD_NAME } from '../article-create.type';
// import { TitlePrimary } from 'src/lib/element/title';
// import { THEME_SIZE } from 'src/lib/theme';
import { ReactEditorBlock } from '../../../lib/common/editor';
// import { BlockCategories } from 'src/lib/common/block-categories';
// import { RecomendationBlock } from 'src/lib/common/block-select-recomendation';
// import { ModifierBlock } from 'src/lib/common/block-modifier';
import { Grid } from '@material-ui/core';
import Button from '@mui/material/Button';

import { TextFieldElement } from '../../../lib/element/text-field.element.js';

import { text } from '../../../lib/common/text';

export function FormComponent(props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    edit,
    readOnly,
  } = props;

  const isFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };
  const getFieldError = (name) => isFieldError(name) && errors[name];

  const setEditorData = (name) => (editorData) =>
    setFieldValue(name, editorData);
  const setVisible = () => {
    setFieldValue(
      ARTICLE_FIELD_NAME.DELETED,
      !values[ARTICLE_FIELD_NAME.DELETED],
    );
  };

  return (
    <Grid>
      {/* <SectionLayout type="TEXT">
        <FieldLayout type="double" adaptive>
          <BasicField
            titleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.ARTICLE_NAME"
            placeholderTid="ARTICLE_CREATE_FORM.FIELDS.PLACEHOLDER.WRITE_ARTICLE_NAME"
            name={ARTICLE_FIELD_NAME.NAME}
            value={values[ARTICLE_FIELD_NAME.NAME]}
            error={getFieldError(ARTICLE_FIELD_NAME.NAME)}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ModifierBlock
            colorTitleTid="Цвет плашки"
            titleTid="ARTICLE_CREATE_FORM.FIELDS.TITLE.DIE"
            placeholderTid="ARTICLE_CREATE_FORM.FIELDS.PLACEHOLDER.EXAMPLE_HIT"
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            name={ARTICLE_FIELD_NAME.MODIFIER}
            colorName={ARTICLE_FIELD_NAME.COLOR_MODIFIER}
          />
        </FieldLayout>
        <BlockCategories values={values} handleBlur={handleBlur} type={4} /> */}
      <Grid item>
        <TextFieldElement
          label={text('CHANGETITLE')}
          name={ARTICLE_FIELD_NAME.TITLE}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[ARTICLE_FIELD_NAME.TITLE]}
          error={isFieldError(ARTICLE_FIELD_NAME.TITLE)}
          fullWidth
          errorText={getFieldError(ARTICLE_FIELD_NAME.TITLE)}
        />
      </Grid>
      <Grid item>
        <TextFieldElement
          type="password"
          label={text('CHANGEDESC')}
          name={ARTICLE_FIELD_NAME.DESCRIPTION}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[ARTICLE_FIELD_NAME.DESCRIPTION]}
          error={isFieldError(ARTICLE_FIELD_NAME.DESCRIPTION)}
          fullWidth
          errorText={getFieldError(ARTICLE_FIELD_NAME.DESCRIPTION)}
        />
      </Grid>

      <ReactEditorBlock
        titleTid="Пост"
        handleChange={setEditorData(ARTICLE_FIELD_NAME.ARTICLE)}
        data={values[ARTICLE_FIELD_NAME.ARTICLE]}
        minHeight={100}
        readOnly={readOnly}
      />
      {/* <RecomendationBlock
          values={values[ARTICLE_FIELD_NAME.RECOMMENDATIONS]}
          name={ARTICLE_FIELD_NAME.RECOMMENDATIONS}
          setFieldValue={setFieldValue}
        /> */}

      {/* <FieldCheckbox
          titleTid="Видимость статьи"
          labelTid="Не показан в списке"
          name={ARTICLE_FIELD_NAME.DELETED}
          value={values[ARTICLE_FIELD_NAME.DELETED]}
          checked={values[ARTICLE_FIELD_NAME.DELETED]}
          onClick={setVisible}
          onBlur={handleBlur}
        /> */}
      {/* <FieldLayout type="double" adaptive> */}
      {readOnly ? null : edit ? (
        <Button type="sumbit">
          {text('EDITAPPROVE')}
        </Button>
      ) : (
        <Button type="sumbit">
          {text('CREATE')}
        </Button>
      )}

      {/* <ButtonSecondary
            onClick={() => window.location.reload()}
            tid="ARTICLE_CREATE_FORM.BUTTON.RESET"
          /> */}
      {/* </FieldLayout> */}
      {/* </SectionLayout> */}
    </Grid>
  );
}
