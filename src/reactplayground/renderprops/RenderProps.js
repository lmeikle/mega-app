import React from 'react';
import RequestAnimationFrameRenderProps from './RequestAnimationFrameRenderProps';
import RequestAnimationFrameFunctionAsChild from './RequestAnimationFrameFunctionAsChild';
import RequestAnimationFrameHOC from './RequestAnimationFrameHOC';

const Text = props => <p>{props.children}</p>;

// tightly coupled to the Text element
const Random1 = props => <Text>{Math.random()}</Text>;

// children as a function
const Random2 = props => props.children(Math.random());

// render props
// The render props wrapping function prevents the creation of the Text element
// till it’s called by Random and allows some logic to happen before it’s called.
const Random3 = props => props.render(Math.random());

// hoc
const withRandom = (Wrapped, targetProp) =>
  class Random extends React.Component {
    render() {
      return <Wrapped {...{ [targetProp]: Math.random() }} />;
    }
  };
const Random4 = withRandom(Text, 'children');

const RenderProps = () => (
  <div style={{ textAlign: 'left' }}>
    <div style={{ textAlign: 'center' }}>Render Props - why</div>
    <br />
    <div>
      <div>
        <b>Example 1 - Random is tightly coupled to the Text element</b>
      </div>
      <Random1 />
      <code>
        {`const Random = props => <Text>{Math.random()}</Text>;`}
        <br />
        {`<Random />`}
      </code>
      <br />
      <br />
    </div>
    <hr />
    <div>
      <div>
        <b>Example 2 - Children as a funciton</b>
      </div>
      <Random2>{number => <Text>{number}</Text>}</Random2>
      <code>
        {`const Random = props => props.children(Math.random());`}
        <br />
        {`<Random>{number => <Text>{number}</Text>}</Random2>`}
      </code>
      <br />
      <br />
    </div>
    <hr />
    <div>
      <div>
        <b>Example 3 - Render props</b>
      </div>
      <div>
        The render props wrapping function prevents the creation of the Text element till it’s called by Random and allows some logic to happen before
        it’s called.
      </div>
      <Random3 render={number => <Text>{number}</Text>} />
      <code>
        {`const Random = props => props.render(Math.random());`}
        <br />
        {`<Random render={number => <Text>{number}</Text>} />`}
      </code>
      <br />
      <br />
    </div>
    <hr />
    <div>
      <div>
        <b>Example 4 - HOC Comparison</b>
      </div>
      <div>
        As you can see, this creates a wrapped version of Text at definition time and not at render time. Forces you to create a new component every
        time you want to wrap something, also it’s less flexible in terms of props, since they would also have to be defined at wrapping time. With
        RPs wrapping and usage time are the same, so you can do all in one go.
      </div>
      <Random4 />
      <code>
        {`const Random = withRandom(Text, "children");`}
        <br />
        {`<Random/>`}
      </code>
      <br />
      <br />
    </div>
    <hr />
    {
      // https://medium.com/@jonatan_salas/advanced-react-patterns-lets-talk-about-render-props-function-as-child-and-hocs-c0cc4b5d6797
      // https://medium.com/workshop-me/render-props-react-createcontext-but-how-9c8e457a90e3
    }
    <div>
      <div>
        <b>Example 5 - RequestAnimationFrame using RenderProps</b>
      </div>
      <div />
      <RequestAnimationFrameRenderProps />
      <code>{`<RequestAnimationFrameRenderProps />`}</code>
      <br />
      <br />
    </div>
    <hr />
    <div>
      <div>
        <b>Example 6 - RequestAnimationFrame using Function as Child</b>
      </div>
      It shares all the pros/cons and use cases from render prop above. So, the usage of one or another, really depends on what you like the most.
      <div />
      <RequestAnimationFrameFunctionAsChild />
      <code>{`<RequestAnimationFrameFunctionAsChild />`}</code>
      <br />
      <br />
    </div>
    <hr />
    <div>
      <div>
        <b>Example 6 - RequestAnimationFrame using HOC</b>
      </div>
      <div />
      <RequestAnimationFrameHOC />
      <code>{`<RequestAnimationFrameHOC />`}</code>
      <br />
      <br />
    </div>
  </div>
);

export default RenderProps;
