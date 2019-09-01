import React, { Component } from 'react';

export const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'absolute',
    float: 'left',
    clear: 'both',
    width: '100%',
    height: '100vh',
    zIndex: -1,
  },
};

export class BackgroundContainer extends Component {
  render(): JSX.Element {
    return <div style={styles.container}>{this.props.children}</div>;
  }
}

export default BackgroundContainer;
