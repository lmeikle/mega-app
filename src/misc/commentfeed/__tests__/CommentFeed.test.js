import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import CommentFeed from '../CommentFeed';

// props factory to help us arrange tests for this component
const createEmptyCommentsProps = props => ({
  auth: {
    name: 'Laura Meikle'
  },
  header: 'Comment Feed',
  comments: [],
  createComment: jest.fn(),
  likeComment: jest.fn(),
  unlikeComment: jest.fn(),
  ...props
});

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
  createComment: jest.fn(),
  likeComment: jest.fn(),
  unlikeComment: jest.fn(),
  ...props
});

describe('CommentFeed', () => {
  afterEach(cleanup);

  it('renders the CommentFeed', () => {
    let props = createEmptyCommentsProps();
    const { queryByText, container } = render(<CommentFeed {...props} />);
    const header = queryByText(props.header);
    expect(header.innerHTML).toBe(props.header);
  });

  it('renders the an empty comment list', () => {
    let props = createEmptyCommentsProps();
    const { container } = render(<CommentFeed {...props} />);
    const commentNodes = container.querySelectorAll('.comment-feed-comment');
    expect(commentNodes.length).toBe(props.comments.length);
  });

  it('renders the comment list', () => {
    let props = createProps();
    const { container } = render(<CommentFeed {...props} />);
    const commentNodes = container.querySelectorAll('.comment-feed-comment');
    expect(commentNodes.length).toBe(props.comments.length);
  });

  it('allows the user to add a comment', () => {
    // Arrange - create props and locate elements
    const newComment = { author: 'Socrates', text: 'Why?' };
    let props = createProps();
    const { container, getByLabelText } = render(<CommentFeed {...props} />);

    const authorNode = getByLabelText('Author');
    const textNode = getByLabelText('Comment');
    const formNode = container.querySelector('form');

    // Act - simulate changes to elements
    authorNode.value = newComment.author;
    textNode.value = newComment.text;

    fireEvent.change(authorNode);
    fireEvent.change(textNode);

    fireEvent.submit(formNode);

    // Assert - check whether the desired functions were called
    expect(props.createComment).toHaveBeenCalledTimes(1);
    expect(props.createComment).toHaveBeenCalledWith(newComment);
  });

  it('allows the user to like a comment', () => {
    let props = createProps();
    let id = props.comments[1].id;
    const { getByTestId } = render(<CommentFeed {...props} />);

    const likeNode = getByTestId(id);
    fireEvent.click(likeNode);

    expect(props.likeComment).toHaveBeenCalledTimes(1);
    expect(props.likeComment).toHaveBeenCalledWith(id, props.auth);
  });

  it('allows the user to unlike a comment', () => {
    let props = createProps();
    let id = props.comments[0].id;
    const { getByTestId } = render(<CommentFeed {...props} />);

    const likeNode = getByTestId(id);
    fireEvent.click(likeNode);

    expect(props.unlikeComment).toHaveBeenCalledTimes(1);
    expect(props.unlikeComment).toHaveBeenCalledWith(id, props.auth);
  });

  it('combines like and dislike methods', () => {
    // essentially a TODO!
  });
});
