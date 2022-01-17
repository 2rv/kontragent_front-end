import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isRequestPending } from '../../main/store/store.service';
import { cleanupStore } from './article-comment-delete.action';
import { ArticleCommentDeleteComponent } from './frame/article-comment-delete.component';
import { ARTICLE_COMMENT_DELETE_STORE_NAME } from './article-comment-delete.constant';
import { ArticleCommentDelete } from './article-comment-delete.action';

export function ArticleCommentDeleteContainer(props) {
  const dispatch = useDispatch();
  const { state } = useSelector((state) => ({
    state: state[ARTICLE_COMMENT_DELETE_STORE_NAME],
  }));

  const { commentId } = props;

  console.log(commentId);

  React.useEffect(() => {
    return function cleanup() {
      dispatch(cleanupStore());
    };
  }, []);

  const handleDelete = async (commentId) => {
    dispatch(ArticleCommentDelete(commentId));
  };

  return (
    <ArticleCommentDeleteComponent
      isPending={isRequestPending(state.form)}
      commentId={commentId}
      handleDelete={handleDelete}
    />
  );
}
