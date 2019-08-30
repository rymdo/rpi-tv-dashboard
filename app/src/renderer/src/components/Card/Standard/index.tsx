import React, { Component } from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    backgroundColor: 'yellow',
    padding: 10,
    margin: 10,
    borderRadius: 2,
  },
};

export class CardStandard extends Component {
  render() {
    return <div style={styles.container}>CARD</div>;
  }
}
