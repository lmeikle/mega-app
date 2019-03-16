import React from 'react';
import './styles.css';

/**
 * https://malcoded.com/posts/react-swipeable-list
 */
class SwipeableListItem extends React.Component {
  constructor(props) {
    super(props);

    this.listElement = null;
    this.wrapper = null;
    this.background = null;

    // Drag & Drop
    this.dragStartX = 0;
    this.left = 0;
    this.dragged = false;

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onDragStartMouse = this.onDragStartMouse.bind(this);
    this.onDragStartTouch = this.onDragStartTouch.bind(this);
    this.onDragEndMouse = this.onDragEndMouse.bind(this);
    this.onDragEndTouch = this.onDragEndTouch.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.onSwiped = this.onSwiped.bind(this);
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.onDragEndMouse);
    window.addEventListener('touchend', this.onDragEndTouch);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onDragEndMouse);
    window.removeEventListener('touchend', this.onDragEndTouch);
  }

  onDragStartMouse(evt) {
    this.onDragStart(evt.clientX);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  onDragStartTouch(evt) {
    const touch = evt.targetTouches[0];
    this.onDragStart(touch.clientX);
    window.addEventListener('touchmove', this.onTouchMove);
  }

  onDragStart(clientX) {
    this.dragged = true;
    this.dragStartX = clientX;

    this.listElement.className = 'ListItem';

    requestAnimationFrame(this.updatePosition);
  }

  onMouseMove(evt) {
    const left = evt.clientX - this.dragStartX;
    if (left < 0) {
      this.left = left;
    }
  }

  onTouchMove(evt) {
    const touch = evt.targetTouches[0];
    const left = touch.clientX - this.dragStartX;
    if (left < 0) {
      this.left = left;
    }
  }

  onDragEndMouse(evt) {
    window.removeEventListener('mousemove', this.onMouseMove);
    this.onDragEnd();
  }

  onDragEndTouch(evt) {
    window.removeEventListener('touchmove', this.onTouchMove);
    this.onDragEnd();
  }

  onDragEnd() {
    if (this.dragged) {
      this.dragged = false;

      const threshold = this.props.threshold || 0.3;

      if (this.left < this.listElement.offsetWidth * threshold * -1) {
        this.left = -this.listElement.offsetWidth * 2;

        // Add this:
        this.wrapper.style.display = 'none';
        this.onSwiped();
      } else {
        this.left = 0;
      }

      this.listElement.className = 'BouncingListItem';
      this.listElement.style.transform = `translateX(${this.left}px)`;
    }
  }

  onSwiped() {
    if (this.props.onSwipe) {
      this.props.onSwipe();
    }
  }

  updatePosition() {
    if (this.dragged) requestAnimationFrame(this.updatePosition);

    this.listElement.style.transform = `translateX(${this.left}px)`;

    // Fade the opacity
    const opacity = (Math.abs(this.left) / 100).toFixed(2);
    if (opacity < 1 && opacity.toString() !== this.background.style.opacity) {
      this.background.style.opacity = opacity.toString();
    }
    if (opacity >= 1) {
      this.background.style.opacity = '1';
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="Wrapper" ref={div => (this.wrapper = div)}>
          <div ref={div => (this.background = div)} className="Background">
            <span>Delete</span>
          </div>
          <div ref={div => (this.listElement = div)} onMouseDown={this.onDragStartMouse} onTouchStart={this.onDragStartTouch} className="ListItem">
            {this.props.children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SwipeableListItem;
