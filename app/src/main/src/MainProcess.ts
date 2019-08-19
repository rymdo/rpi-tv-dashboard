import * as electron from 'electron';
import * as path from 'path';

import { MainWindow } from './MainWindow';

interface EnvConfig {
  development: boolean;
  touch: boolean;
  touchSimulate: boolean;
  frame: boolean;
  kiosk: boolean;
  nodeIntegration: boolean;
  width: number;
  height: number;
  title: string;
  devConsole: boolean;
  zoomFactor: number;
  url: string;
  hardwareAcceleration: boolean;
  updateLock: boolean;
  appDataDir: string;
  userDataDir: string;
}

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
    const config: EnvConfig = this.parseEnvironmentVariables();
    this.mainWindow = new MainWindow({
      x: 0,
      y: 0,
      kiosk: config.development ? false : config.kiosk,
      frame: config.development ? true : config.frame,
      width: config.development ? 1280 : config.width,
      height: config.development ? 720 : config.height,
      title: config.development ? `${config.title} (DEV)` : config.title,
      webPreferences: {
        sandbox: false,
        nodeIntegration: config.nodeIntegration,
        zoomFactor: config.zoomFactor,
      },
    });
  };

  private parseEnvironmentVariables(): EnvConfig {
    const parseEnvBoolean = (
      env: string | undefined,
      defaultSetting: boolean
    ): boolean => {
      if (env === undefined || env === null || env === '') {
        return defaultSetting;
      }
      return env === '1' ? true : false;
    };
    const parseEnvInt = (
      env: string | undefined,
      defaultSetting: number
    ): number => {
      if (env === undefined || env === null || env === '') {
        return defaultSetting;
      }
      return parseInt(env);
    };
    const parseEnvFloat = (
      env: string | undefined,
      defaultSetting: number
    ): number => {
      if (env === undefined || env === null || env === '') {
        return defaultSetting;
      }
      return parseFloat(env);
    };
    const parseEnvString = (
      env: string | undefined,
      defaultSetting: string
    ): string => {
      if (env === undefined || env === null || env === '') {
        return defaultSetting;
      }
      return env;
    };
    const parseEnvDevelopment = (
      env: string | undefined,
      defaultSetting: boolean
    ): boolean => {
      if (env === undefined || env === null || env === '') {
        return defaultSetting;
      }
      return !!(env === 'development');
    };

    const defaultConfig: EnvConfig = {
      development: false,
      touch: false,
      touchSimulate: false,
      frame: false,
      kiosk: false,
      nodeIntegration: true,
      width: 1920,
      height: 1080,
      title: 'BALENA-ELECTRON-REACT',
      devConsole: false,
      zoomFactor: 1.0,
      url: `file:///${path.join(__dirname, 'build', 'index.html')}`,
      hardwareAcceleration: false,
      updateLock: false,
      appDataDir: '',
      userDataDir: '',
    };

    return {
      development: parseEnvDevelopment(process.env.NODE_ENV, false),
      touch: parseEnvBoolean(
        process.env.URL_LAUNCHER_TOUCH,
        defaultConfig.touch
      ),
      touchSimulate: parseEnvBoolean(
        process.env.URL_LAUNCHER_TOUCH_SIMULATE,
        defaultConfig.touchSimulate
      ),
      frame: parseEnvBoolean(
        process.env.URL_LAUNCHER_FRAME,
        defaultConfig.frame
      ),
      kiosk: parseEnvBoolean(
        process.env.URL_LAUNCHER_KIOSK,
        defaultConfig.kiosk
      ),
      nodeIntegration: parseEnvBoolean(
        process.env.URL_LAUNCHER_NODE,
        defaultConfig.nodeIntegration
      ),
      width: parseEnvInt(process.env.URL_LAUNCHER_WIDTH, defaultConfig.width),
      height: parseEnvInt(
        process.env.URL_LAUNCHER_HEIGHT,
        defaultConfig.height
      ),
      title: parseEnvString(
        process.env.URL_LAUNCHER_TITLE,
        defaultConfig.title
      ),
      devConsole: parseEnvBoolean(
        process.env.URL_LAUNCHER_CONSOLE,
        defaultConfig.devConsole
      ),
      zoomFactor: parseEnvFloat(
        process.env.URL_LAUNCHER_ZOOM,
        defaultConfig.zoomFactor
      ),
      url: parseEnvString(
        process.env.URL_LAUNCHER_OVERLAY_SCROLLBARS,
        defaultConfig.url
      ),
      hardwareAcceleration: parseEnvBoolean(
        process.env.ELECTRON_ENABLE_HW_ACCELERATION,
        defaultConfig.hardwareAcceleration
      ),
      updateLock: parseEnvBoolean(
        process.env.ELECTRON_RESIN_UPDATE_LOCK,
        defaultConfig.updateLock
      ),
      appDataDir: parseEnvString(
        process.env.ELECTRON_APP_DATA_DIR,
        defaultConfig.appDataDir
      ),
      userDataDir: parseEnvString(
        process.env.ELECTRON_USER_DATA_DIR,
        defaultConfig.userDataDir
      ),
    };
  }
}
