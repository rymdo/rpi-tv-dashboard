import React, { Component } from 'react';

import { TopBar } from './containers/TopBar';
import { Content } from './containers/Content';

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
          <Content />
        </div>
      </div>
    );
  }
}
