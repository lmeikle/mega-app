import React, { Component } from 'react';
import CommentFeed from './CommentFeed';

const createProps = props => ({
  auth: {
    id: 'user-0',
    name: 'Laura Meikle'
  },
  header: 'Comment Feed',
  comments: [
    {
      id: 'comment-0',
      author: 'Ian Wilson',
      text: 'A boats a boat but a mystery box could be anything.',
      likes: ['user-0']
    },
    {
      id: 'comment-1',
      author: 'Max Powers Jr',
      text: 'Krypton sucks.',
      likes: []
    }
  ],
  createComment: () => {},
  likeComment: () => {},
  unlikeComment: () => {}
});

export default class CommentFeedContainer extends Component {
  render() {
    return <CommentFeed header="Comment Feed" {...createProps()} />;
  }
}
