// 🦉 Hi! I'm Olivia the Owl and I'm here to guide you through this example.
// Allow me to introduce you to my assistants:
// 🐻 Barry the Bear
// 🦁 Lisa the Lion
// 🦆 Derek the Duck
// 🦊 Freddy the Fox
// 🐸 Felicity the Frog
//
// You'll find us throughout the code explaining what's going on. I (Olivia) will appear wherever
// there's a general comment about the code for you. My assistants will appear next to comments
// around code that's there to support specific patterns:
// - 🐻 compound components
// - 🦁 render props
// - 🦆 Component Injection
// - 🦊 provider pattern
// - 🐸 HOC
//
// 🦉 In particular, this example is attempting to show the different patterns for controlling
// rendering. There are various other patterns which allow you to expose mechanims for
// controlling component state (state initializers, state reducers, control props, etc.).
// Note: in order facilitate flexibility over rendering, we're also using the prop getter
// pattern in this component as well.
// Enjoy!

import React from 'react';
import { render } from 'react-dom';
// 🦉 The toggle file is full of comments from myself and my assistants
// that you might find insightful!
import { Toggle, withToggle } from './toggle';
import { Switch } from './switch';

// 🦉 Below, I'll be mentioning a few shortcomings that the different
// APIs have themselves. Because our one component implements _all_ of
// these patterns, we can side-step many of the issues by mixing them
// together where they make the most sense.
// I should note that this example is NOT a suggestion that you should
// be doing this for all of your components. Think critically about
// which patterns make the most sense for your component. If you only
// want to implement one, then I suggest render props.

// *****************************************************************
// **                                                             **
// **  All other patterns can be built out of a render prop API!  **
// **                                                             **
// *****************************************************************

// 🐻 Hi there! Here's an example of using the compound components API!
// They allow users of your component to ignore the implicit state that's
// shared between the compound components if they don't need access to
// it for rendering things.
//
// 🦉 It has the limitation that there's less flexibility over what gets
// rendered when used by itself because all state is implicitly shared.
// For example, if we wanted to render a different kind of button here,
// then we'd have to use one of the other patterns to access the
// `getTogglerProps` or the `toggle` function to attatch to the `onClick`
// handler of our custom button.
function CompoundComponents(props) {
  return (
    <Toggle {...props}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
}

// 🦁 Hey! Here's an example of using the render props API!!
// This gives the consumer 100% power over the rendering of the component.
// You can think of the render props API as simply moving the `render` method
// from your component to the consumer and accepting it as a prop.
//
// 🦉 One of the problems that this pattern suffers from is its susceptibility
// to the prop drilling problem (if you need to render a lot of UI and/or
// want to pass the state down through a few layers of components).
//
// Another problem this pattern suffers from is when composing multiple render props
// together you can wind up with a fairly deeply nested render method which
// can be pretty frustrating. You might consider using react-adopt if this
// is a problem for you.
//
// Finally, a third (sorta) problem with this approach is if you want access to
// lifecycle methods, you have to create a new component (for the lifecycle methods)
// and render that component: <Toggle>{props => <OtherComp {...props} />}</Toggle>
function RenderProps(props) {
  return (
    <Toggle {...props}>
      {({ on, getTogglerProps }) => (
        <div>
          {on ? 'The button is on' : 'The button is off'}
          <Switch {...getTogglerProps()} />
        </div>
      )}
    </Toggle>
  );
}

// 🦆 Hey! So here's the component injection pattern!
// It's almost identical to the render prop pattern except instead of simply
// calling the function you provide, it actually uses React.createElement.
// This means that you can use this pattern the same way you do render
// props if you want to, but you can also create a component and pass that
// instead and all your lifecycle methods will work as you'd expect.
//
// 🦉 This pattern suffers from the prop drilling problem that render props
// has.
//
// One other potential frustration with this pattern is if you don't
// need lifecycle hooks and you really only need a render method, the
// fact that it's calling React.createElement is wasteful and clutters
// up React DevTools.
class MyToggleConsumerComponent extends React.Component {
  render() {
    const { on, getTogglerProps } = this.props;
    return (
      <div>
        {on ? 'The button is on' : 'The button is off'}
        <Switch {...getTogglerProps()} />
      </div>
    );
  }
}

function ComponentInjection(props) {
  return <Toggle {...props}>{MyToggleConsumerComponent}</Toggle>;
}

// 🦊 Hi there! Here's the provider pattern!
// This helps you overcome the prop drilling problem that the render prop
// and component injection patterns both have. It allows developers to
// get access to your component's state at any spot within the render tree
// of your component. It leverages React.createContext heavily and in this
// example it's a fairly straightforward abstraction on top of that API.
//
// 🦉 One thing you need to consider with this pattern is ensuring you're
// not re-rendering all consumers unecessarily. This is addressed and noted
// in our implementation above.
// Also, in our implementation, we're not exposing the ToggleContext directly
// and that's intentional. It allows us to implement the provider ourselves
// and expose a slightly more capable consumer. See the implementation notes
// for more on this.
function ProviderPattern(props) {
  return (
    <Toggle {...props}>
      <div>
        {/*
           You can put whatever you want within the Toggle, and at any layer of
           the tree use Toggle.Consumer to access the Toggle state and helpers
        */}
        <div>
          <Toggle.Consumer>
            {({ on, toggle, getTogglerProps }) => (
              <div>
                {on ? 'The button is on' : 'The button is off'}
                <Switch {...getTogglerProps()} />
              </div>
            )}
          </Toggle.Consumer>
        </div>
      </div>
    </Toggle>
  );
}

// 🐸 Hi! Here's our HOC example
// Here, you create a component that accepts the toggle state as a prop
// (called `toggle` here). Then you pass that component to the `withToggle`
// Higher Order Component function. That will return you a new component
// that will render yours with the toggle state.
function MyToggleComponent({ toggle: { on, getTogglerProps } }) {
  return (
    <div>
      {on ? 'The button is on' : 'The button is off'}
      <Switch {...getTogglerProps()} />
    </div>
  );
}
const MyWrappedToggleComponent = withToggle(MyToggleComponent);

function HOC(props) {
  return (
    <Toggle {...props}>
      <MyWrappedToggleComponent />
    </Toggle>
  );
}

// 🦉 and here's us rendering all the examples...
const Title = props => <strong style={{ display: 'block' }} {...props} />;

function MixingComponentPatterns({ onToggle = (...args) => console.log('onToggle', ...args) }) {
  return (
    <div>
      <h1>Mixing Component Patterns 🦉</h1>
      <Title>🐻 Compound Components</Title>
      <CompoundComponents onToggle={onToggle} />
      <hr />
      <Title>🦁 Render Props</Title>
      <RenderProps onToggle={onToggle} />
      <hr />
      <Title>🦆 Component Injection</Title>
      <ComponentInjection onToggle={onToggle} />
      <hr />
      <Title>🦊 Provider Pattern</Title>
      <ProviderPattern onToggle={onToggle} />
      <hr />
      <Title>🐸 Higher Order Component</Title>
      <HOC onToggle={onToggle} />
    </div>
  );
}

export default MixingComponentPatterns;
