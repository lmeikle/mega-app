import React, { Component } from 'react';
import values from 'lodash/values';
import { data } from './dummyData';
import TreeNode from './TreeNode';

export default class Tree extends Component {
  state = {
    nodes: data,
    selectedFile: null
  };

  getRootNodes = () => {
    const { nodes } = this.state;
    return values(nodes).filter(node => node.isRoot === true);
  };

  getChildNodes = node => {
    const { nodes } = this.state;
    if (!node.children) return [];
    return node.children.map(path => nodes[path]);
  };

  onToggle = node => {
    const { nodes } = this.state;
    nodes[node.path].isOpen = !node.isOpen;
    this.setState({ nodes });
  };

  onSelect = file => this.setState({ selectedFile: file });

  render() {
    const rootNodes = this.getRootNodes();
    const { selectedFile } = this.state;

    return (
      <React.Fragment>
        <h3>Tree View Example</h3>
        <div>
          {rootNodes.map(node => (
            <TreeNode node={node} getChildNodes={this.getChildNodes} onToggle={this.onToggle} onNodeSelect={this.onSelect} level={0} />
          ))}
        </div>
        <div>{selectedFile && selectedFile.type === 'file' && selectedFile.content}</div>
      </React.Fragment>
    );
  }
}
