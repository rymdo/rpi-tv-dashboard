import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

export class MainRenderer {
  public start(): void {
    render(<App />, document.getElementById('app'));
  }
}
