import React, { Component } from 'react';
import Comment from './Comment';
import './CommentFeed.css';

export default class CommentFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { author, text } = this.state;
    this.props.createComment({ author, text });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleLike = id => {
    this.props.likeComment(id, this.props.auth);
  };

  handleDislike = id => {
    this.props.unlikeComment(id, this.props.auth);
  };

  render() {
    const { header, comments, auth } = this.props;
    return (
      <div className="comment-feed">
        <h2>{header}</h2>

        <form className="comment-feed-form" onSubmit={this.handleSubmit}>
          <label htmlFor="author">
            Author
            <input id="author" type="text" onChange={this.handleChange} />
          </label>
          <label htmlFor="text">
            Comment
            <input id="text" type="text" onChange={this.handleChange} />
          </label>

          <button type="submit">Submit Comment</button>
        </form>

        <div className="comment-feed-list">
          {comments.map((comment, i) => <Comment key={i} currentUser={auth} {...comment} onLike={this.handleLike} onDislike={this.handleDislike} />)}
        </div>
      </div>
    );
  }
}
