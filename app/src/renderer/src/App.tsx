import React, { Component } from 'react';

import { TopBar } from './containers/TopBar';
import { Content } from './containers/Content';
import { BackgroundContainer } from './components/Background/BackgroundContainer';
import { YouTubeCard } from './components/Card/YouTubeCard';

import './App.css';
import ReactImg from './images/react.png';

export class App extends Component {
  spinner(): JSX.Element {
    return <img src={ReactImg} alt="img" />;
  }
  render(): JSX.Element {
    return (
      <div className="App">
        <div className="ContainerTopBar">
          <TopBar />
        </div>
        <div className="ContainerMain">
          <BackgroundContainer>
            <YouTubeCard videoId={'_VHVEw2h5F0'} start={10} />
          </BackgroundContainer>
          <Content />
        </div>
      </div>
    );
  }
}
