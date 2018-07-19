import React from 'react';
import './CommentFeed.css';

const Comment = props => {
  const isLiked = props.likes.includes(props.currentUser.id);
  const onClick = isLiked ? () => props.onDislike(props.id) : () => props.onLike(props.id);
  return (
    <div className="comment-feed-comment">
      <h4>{props.author}</h4>
      <p>{props.text}</p>
      <button data-testid={props.id} onClick={onClick}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
};

export default Comment;
