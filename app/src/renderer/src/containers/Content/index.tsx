import React, { Component } from 'react';

import { Card, CardType } from '../../../../shared/type.env';
import IFrameCard from '../../components/Card/IFrameCard';
import { YouTubeCard } from './../../components/Card/YouTubeCard';
import { CardContainer } from './../CardContainer';

const styles: { [key: string]: React.CSSProperties } = {
  containerCardsLandscape: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    height: '100%',
  },
  containerCardsPortrait: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
    height: '100%',
  },
  containerCard: {
    flex: 1,
    margin: 50,
    borderRadius: 2,
  },
};

export interface ContentProps {
  landscape: boolean;
  content: {
    cards: Card[];
  };
}
export class Content extends Component<ContentProps> {
  public render(): JSX.Element {
    return (
      <div
        style={
          this.props.landscape
            ? styles.containerCardsLandscape
            : styles.containerCardsPortrait
        }
      >
        {this.renderCards(this.props.content.cards)}
      </div>
    );
  }

  private renderCards(cards: Card[]): JSX.Element {
    return (
      <>
        {cards.map((card: Card, index: number) => this.renderCard(card, index))}
      </>
    );
  }

  private renderCard(card: Card, index: number): JSX.Element {
    return (
      <CardContainer
        key={`${index}-${card.type}-${card.url}`}
        style={styles.containerCard}
      >
        {this.getCardContent(card)}
      </CardContainer>
    );
  }

  private getCardContent(card: Card): JSX.Element {
    switch (card.type) {
      case CardType.IFRAME: {
        return this.renderIFrameCard(card.url);
      }
      case CardType.YOUTUBE: {
        return this.renderYoutubeCard(card.url);
      }
    }
    return <></>;
  }

  private renderIFrameCard(url: string): JSX.Element {
    return <IFrameCard src={url} />;
  }

  private renderYoutubeCard(url: string): JSX.Element {
    return <YouTubeCard videoId={url} start={0} />;
  }
}
