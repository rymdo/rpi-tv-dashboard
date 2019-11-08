import * as electron from 'electron';

import { Environment } from '../../shared/type.env';
import { parseEnvironmentVariables } from './env.loader';
import { MainWindow } from './MainWindow';

export class MainProcess {
  private readonly app: electron.App;
  private mainWindow: MainWindow | undefined;
  constructor() {
    this.app = electron.app;
  }

  public start(): void {
    this.app.on('activate', this.onActivate);
    this.app.on('ready', this.onReady);
    this.app.on('window-all-closed', this.onWindowAllClose);
  }

  private onActivate = (): void => {
    if (this.mainWindow === undefined) {
      this.createMainWindow();
    }
  };

  private onReady = (): void => {
    this.createMainWindow();
  };

  private onWindowAllClose = (): void => {
    if (process.platform !== 'darwin') {
      this.app.quit();
    }
  };

  private createMainWindow = (): void => {
    const environment: Environment = parseEnvironmentVariables();
    this.mainWindow = new MainWindow(
      {
        x: 0,
        y: 0,
        kiosk: environment.development ? false : environment.kiosk,
        frame: environment.development ? true : environment.frame,
        width: environment.development ? 1280 : environment.width,
        height: environment.development ? 720 : environment.height,
        title: environment.development
          ? `${environment.title} (DEV)`
          : environment.title,
        webPreferences: {
          sandbox: false,
          nodeIntegration: environment.nodeIntegration,
          zoomFactor: environment.zoomFactor,
        },
      },
      environment
    );
  };
}
