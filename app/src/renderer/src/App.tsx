import './App.css';

import { remote } from 'electron';
import React, { Component } from 'react';

import { Environment } from '../../shared/type.env';
import { BackgroundContainer } from './components/Background/BackgroundContainer';
import { YouTubeCard } from './components/Card/YouTubeCard';
import { Content } from './containers/Content';
import { TopBar } from './containers/TopBar';

interface AppState {
  ready: boolean;
  environment?: Environment;
}

export class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      ready: false,
      environment: undefined,
    };
  }

  componentDidMount(): void {
    const currentWindow: any = remote.getCurrentWindow();
    const environment: Environment = currentWindow.environment;
    this.setState({ ready: true, environment: { ...environment } });
  }

  render(): JSX.Element {
    if (!this.state.ready) {
      return <div></div>;
    }
    if (!this.state.environment) {
      return <div></div>;
    }
    return (
      <div className="App">
        <div className="ContainerTopBar">
          <TopBar />
        </div>
        <div className="ContainerMain">
          <BackgroundContainer>
            <YouTubeCard videoId={'_VHVEw2h5F0'} start={10} />
          </BackgroundContainer>
          <Content content={this.state.environment.content} />
        </div>
      </div>
    );
  }
}
