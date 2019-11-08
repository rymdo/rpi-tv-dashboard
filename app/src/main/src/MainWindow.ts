import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';

import { Environment } from '../../shared/type.env';

export class MainWindow extends BrowserWindow {
  private windowOpen = false;
  private readonly environment: Environment;

  constructor(
    options: BrowserWindowConstructorOptions,
    environment: Environment
  ) {
    super(options);
    this.environment = environment;

    // this.isDevelopment = process.env.NODE_ENV !== 'production';
    // this.useDevTools = process.env.USE_DEV_TOOLD === '1' ? true : true;

    // if ((this.environment.development && this.environment.devConsole) || true) {
    this.webContents.openDevTools();
    // }

    if (this.environment.development) {
      this.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
    } else {
      this.loadURL(
        formatUrl({
          pathname: path.join(__dirname, 'index.html'),
          protocol: 'file',
          slashes: true,
        })
      );
    }

    // window.setSize(1920, 1080);
    // this.setPosition(0, 0);
    // this.removeMenu();
    // this.setFullScreen(true);

    this.on('closed', this.onClose);
    this.webContents.on('devtools-opened', this.onDevToolsOpen);

    this.windowOpen = true;
  }

  public isOpen(): boolean {
    return this.windowOpen;
  }

  private onClose = (): void => {
    this.windowOpen = false;
  };

  private onDevToolsOpen = (): void => {
    this.focus();
    setImmediate(() => {
      this.focus();
    });
  };
}
