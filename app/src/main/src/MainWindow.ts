import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';

export class MainWindow extends BrowserWindow {
  private windowOpen = false;
  private readonly isDevelopment: boolean;
  constructor(options?: BrowserWindowConstructorOptions) {
    super(options);

    this.isDevelopment = process.env.NODE_ENV !== 'production';

    if (this.isDevelopment) {
      this.webContents.openDevTools();
    }

    if (this.isDevelopment) {
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
