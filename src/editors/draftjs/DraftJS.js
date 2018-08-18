import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import './DraftJS.css';

export default class DraftEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.onChange = editorState => {
      console.log('editorState ==>', editorState.toJS());

      this.setState({ editorState });
    };
  }

  render() {
    const { editorState } = this.state;

    return (
      <div>
        <div className="draft-js-title">DraftJS Editor</div>
        <div id="editor-container" className="draft-js-editor-container">
          <div className="draft-js-editor">
            <Editor editorState={editorState} onChange={this.onChange} placeholder="You can type here..." />
          </div>
        </div>
      </div>
    );
  }
}
