import React, { Component } from 'react';

import './App.css';
import ReactImg from './images/react.png';

export class App extends Component {
  spinner(): JSX.Element {
    return <img src={ReactImg} alt="img" />;
  }
  render(): JSX.Element {
    return (
      <div className="App">
        <div className="AppSpinner">{this.spinner()}</div>
      </div>
    );
  }
}
