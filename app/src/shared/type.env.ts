export interface Environment {
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
