import EditorJs from 'react-editor-js';
import { tools, i18n } from './options';
import styled, { css } from 'styled-components';

const ReactEditor = (props) => {
  const { handleChange, readOnly, data, minHeight = 100 } = props;

  const onChange = (_, data) => {
    handleChange(data);
  };
  return (
    <Container readOnly={readOnly}>
      <EditorJs
        minHeight={minHeight}
        readOnly={readOnly}
        enableReInitialize={readOnly ? true : false}
        i18n={i18n}
        onChange={readOnly ? null : onChange}
        data={data}
        tools={tools}
      />
    </Container>
  );
};

const Container = styled.div`
  ${(p) =>
    !p.readOnly &&
    css`
      border-radius: 5px;
      border: 1px solid #808080;
    `}
  .codex-editor__redactor {
    ${(p) => {
      if (!p.readOnly) {
        return css`
	       padding: 0 10px;
	    }
	  `;
      }
    }}
  }
  .ce-block__content h1 {
    font-size: 36px;
  }
  .ce-block__content h2 {
    font-size: 24px;
  }
  .ce-block__content h3 {
    font-size: $18px;
  }
  .ce-block__content h4 {
    font-size: $16px;
  }
  .embed-tool__caption {
    display: none;
  }
  .ce-block__content h5 {
    font-size: 14px;
  }
  .ce-block__content h6 {
    font-size: 12px;
  }
  .ce-delimiter:before {
    content: '';
    border-radius: 5px;
    background-color: #F0F0F0;
    min-height: 2px;
    height: 2px;
    width: 100%;
  }
  .image-tool__image {
    border-radius: 5px;
    max-height: 500px;
  }
  .image-tool__image-picture {
    max-height: 500px;
  }
  .ce-toolbar__content {
    max-width: 100%;
  }
  .ce-block__content {
    max-width: 100%;
    margin: 0;
  }
  /* .tc-wrap { // цвет таблицы
    --color-border: #000 !important;
    --color-background: rgba(0, 0, 0, 0.06) !important;
  } */
  .image-tool__caption {
    display: none;
  }
`;

export default ReactEditor;
