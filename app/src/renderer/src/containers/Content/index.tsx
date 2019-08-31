import React, { Component } from 'react';
import { CardContainer } from './../CardContainer';
import { YouTubeCard } from './../../components/Card/YouTubeCard';

const styles: { [key: string]: React.CSSProperties } = {
  containerCards: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'red',
    height: '100%',
  },
  containerCard: {
    flex: 1,
    margin: 10,
    backgroundColor: 'beige',
    borderRadius: 2,
  },
};

export class Content extends Component {
  render(): JSX.Element {
    return (
      <div style={styles.containerCards}>
        <CardContainer style={styles.containerCard}>
          <YouTubeCard videoId={'Z7o9pbPHu0k'} start={10} />
        </CardContainer>
        <CardContainer style={styles.containerCard}>
          <YouTubeCard videoId={'Z7o9pbPHu0k'} start={10} />
        </CardContainer>
      </div>
    );
  }
}
