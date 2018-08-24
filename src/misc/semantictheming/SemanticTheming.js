import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './SemanticTheming.css';

/**
 * https://jsramblings.com/2018/03/04/how-to-use-semantic-ui-with-a-custom-theme-in-your-CRA-app.html
 * https://github.com/Semantic-Org/Semantic-UI-React/issues/1636
 */
class SemanticTheming extends Component {
  render() {
    return (
      <div>
        <div className="semantic-theming-title">Playing with Semantic Theming</div>
        <Button>Submit</Button>
        <br />
        <br />

        <Button color="yellow" className="does-not-work">
          '.does-not-work'
        </Button>
        <br />
        <br />

        <Button color="yellow" className="does-work">
          '.ui.yellow.button.does-work'
        </Button>
        <br />
        <br />

        <Button color="yellow" className="hack">
          '.hack.hack.hack'
        </Button>
        <br />
        <br />

        <Button primary className="does-work">
          Submit
        </Button>
        <br />
        <br />

        <Button secondary>Submit</Button>
      </div>
    );
  }
}

export default SemanticTheming;
