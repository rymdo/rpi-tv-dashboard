import React, { Component } from 'react';

import { CardContainer } from './../CardContainer';
import { CardStandard } from '../../components/Card/Standard';

const styles: { [key: string]: React.CSSProperties } = {
  containerCards: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'red',
  },
  containerCard: {
    flex: 1,
    margin: 10,
    backgroundColor: 'beige',
    borderRadius: 2,
  },
};

export class Content extends Component {
  render() {
    return (
      <div style={styles.containerCards}>
        <CardContainer style={styles.containerCard}>
          <CardStandard />
          <CardStandard />
        </CardContainer>
        <CardContainer style={styles.containerCard}>
          <CardStandard />
          <CardStandard />
        </CardContainer>
      </div>
    );
  }
}
