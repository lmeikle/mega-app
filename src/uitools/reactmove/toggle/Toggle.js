import React, { PureComponent } from 'react';
import Animate from 'react-move/Animate';
import { easeExpOut } from 'd3-ease';

const toggleContainerStyle = {
  borderRadius: 4,
  backgroundColor: 'rgb(240, 240, 232)',
  position: 'relative',
  margin: '5px auto',
  width: 150,
  height: 50
};

class Toggle extends PureComponent {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Toggle</button>
        <Animate
          start={() => ({
            x: 0
          })}
          update={() => ({
            x: [this.state.open ? 100 : 0],
            timing: { duration: 750, ease: easeExpOut }
          })}
        >
          {state => {
            const { x } = state;

            return (
              <div style={toggleContainerStyle}>
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 4,
                    opacity: 0.7,
                    backgroundColor: '#00cf77',
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`
                  }}
                />
              </div>
            );
          }}
        </Animate>
      </div>
    );
  }
}

export default Toggle;
