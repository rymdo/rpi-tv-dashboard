import React, { Component } from 'react';

export class CardContainer extends Component<{ style: React.CSSProperties }> {
  render(): JSX.Element {
    return <div style={this.props.style}>{this.props.children}</div>;
  }
}
