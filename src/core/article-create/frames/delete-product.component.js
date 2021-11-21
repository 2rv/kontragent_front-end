// import styled from 'styled-components';
// import { ButtonPrimary, ButtonSecondary } from 'src/lib/element/button';
// import { FieldLayout, SectionLayout } from 'src/lib/element/layout';
// import { Popup } from 'src/lib/element/popup';
// import { TextSecondary } from 'src/lib/element/text';
// import { spacing, THEME_COLOR } from 'src/lib/theme';
// import { ErrorAlert } from 'src/lib/element/alert';

export function DeleteProductComponent(props) {
  const {
    isEdit,
    deleteProduct,
    deleteIsPending,
    deleteIsError,
    deleteErrorMessage,
  } = props;

  if (!isEdit) {
    return null;
  }

  return null;

  // return (
  //   <SectionLayout>
  //     <Popup
  //       mobileRight
  //       onLeft
  //       content={(setVisible) => (
  //         <Content>
  //           <TextSecondary tid="OTHER.ARE_YOU_SURE_TO_DELETE_THIS_PRODUCT" />
  //           <FieldLayout type="double">
  //             <ButtonSecondary
  //               tid="OTHER.YES"
  //               onClick={() => {
  //                 deleteProduct();
  //                 setVisible(false);
  //               }}
  //             />
  //             <ButtonPrimary
  //               tid="OTHER.CANCEL"
  //               onClick={() => setVisible(false)}
  //             />
  //           </FieldLayout>
  //         </Content>
  //       )}
  //       children={
  //         <FieldLayout type="double">
  //           <ButtonPrimary
  //             tid="OTHER.DELETE_THIS_PRODUCT"
  //             disabled={deleteIsPending}
  //           />
  //         </FieldLayout>
  //       }
  //     />
  //     {deleteIsError && <ErrorAlert tid={deleteErrorMessage} />}
  //   </SectionLayout>
  // );
}

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 100%;
//   gap: ${spacing(2)};
//   line-height: 1.5;
// `;
