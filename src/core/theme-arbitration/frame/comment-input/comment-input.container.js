import { CommentInputComponent } from './comment-input.component';

export function CommentInputContainer(props) {
  const { isPending, pageLoading, isError, isSuccess, errorMessage, myAvatar } =
    props;
  return (
    <CommentInputComponent
      pageLoading={pageLoading}
      isPending={isPending}
      isError={isError}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      myAvatar={myAvatar}
    />
  );
}
