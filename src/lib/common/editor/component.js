import dynamic from 'next/dynamic';

const ReactEditor = dynamic(() => import('./react-editor'), {
  ssr: false,
});

export function ReactEditorBlock(props) {
  const {
    handleChange,
    data,
    minHeight,
    enableIsEdit,
    titleTid,
    readOnly,
    error,
    errorMessage,
  } = props;

  return (
    <>
      {/* {titleTid && <Title tid={titleTid} />} */}
      <ReactEditor
        data={data}
        readOnly={readOnly}
        minHeight={minHeight}
        handleChange={handleChange}
      />
      {/* {error && <ErrorField errorTid={errorMessage} />} */}
    </>
  );
}
