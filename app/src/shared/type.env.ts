export enum CardType {
  IFRAME = 'IFRAME',
  YOUTUBE = 'YOUTUBE',
}

export interface Card {
  type: CardType;
  url: string;
}

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
  content: {
    cards: Card[];
  };
}

export interface AppEnvVariables {
  CONTENT_CARD_COUNT: string;
  CONTENT_CARD_1_TYPE: string;
  CONTENT_CARD_1_URL: string;
  CONTENT_CARD_2_TYPE: string;
  CONTENT_CARD_2_URL: string;
}
