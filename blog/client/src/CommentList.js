import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ comments }) => {
  const renderCommments = comments.map((comment) => {
    let content;
    if (comment.status === 'approved') {
      content = comment.content;
    } 
    if (comment.status === 'pending') {
      content = 'comment is waiting for moderation';
    }
    if (comment.status === 'rejected') {
      content = 'this comment is rejected';
    }
    return <li key={comment.id}>{content}</li>;
  });
  return <ul>{renderCommments}</ul>;
};
