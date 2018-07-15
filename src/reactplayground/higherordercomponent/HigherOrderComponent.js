import React, { Component } from 'react';
import reverse from './reverse/Reverse';
import Loading from './loading/Loading';
import withScrollWatchHOC from './scrollwatch/withScrollWatchHOC';
import ScrollWatchRenderProps from './scrollwatch/ScrollWatchRenderProps';

// reverse HOC
const name = props => <span>{props.children}</span>;
const ReversedName = reverse(name);

// loading HOC
const List = props => <span>{props.children}</span>;
const ContactsList = Loading('contacts')(List);
const AnotherList = Loading('someStuff')(List);

// scrolling HOC and Render Props
// Component to display an 'x' and 'y'
const ShowPosition = ({ x, y }) => (
  <p>
    x: {x}, y: {y}
  </p>
);
const ScrollWatchUsingHOC = withScrollWatchHOC(ShowPosition);
const ScrollWatchUsingRenderProps = () => <ScrollWatchRenderProps render={(x, y) => <ShowPosition x={x} y={y} />} />;

class HigherOrderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: null
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        contacts: ['laura'],
        someStuff: 'ajfhdjfhskjdhfkdshkf'
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        ReversedName: <ReversedName>Hello</ReversedName>
        <hr />
        ContactsList: <ContactsList contacts={this.state.contacts}>You will see this message when it has loaded it contacts</ContactsList>
        <hr />
        AnotherList: <AnotherList someStuff={this.state.someStuff}>You will see this message when it has loaded it some stuff</AnotherList>
        <hr />
        ScrollWatchUsingHOC: <ScrollWatchUsingHOC />
        ScrollWatchUsingRenderProps: <ScrollWatchUsingRenderProps />
      </div>
    );
  }
}

export default HigherOrderComponent;
