import * as path from 'path';

import { Card, CardType, Environment } from '../../shared/type.env';

function parseEnvBoolean(
  env: string | undefined,
  defaultSetting: boolean
): boolean {
  if (env === undefined || env === null || env === '') {
    return defaultSetting;
  }
  return env === '1' ? true : false;
}

function parseEnvInt(env: string | undefined, defaultSetting: number): number {
  if (env === undefined || env === null || env === '') {
    return defaultSetting;
  }
  return parseInt(env);
}

function parseEnvFloat(
  env: string | undefined,
  defaultSetting: number
): number {
  if (env === undefined || env === null || env === '') {
    return defaultSetting;
  }
  return parseFloat(env);
}

function parseEnvString(
  env: string | undefined,
  defaultSetting: string
): string {
  if (env === undefined || env === null || env === '') {
    return defaultSetting;
  }
  return env;
}

function parseEnvDevelopment(
  env: string | undefined,
  defaultSetting: boolean
): boolean {
  if (env === undefined || env === null || env === '') {
    return defaultSetting;
  }
  return !!(env === 'development');
}

function createCard(type?: CardType | string, url?: string): Card | undefined {
  if (!type || !url) {
    return;
  }
  if (type !== CardType.IFRAME && type !== CardType.YOUTUBE) {
    return;
  }
  return {
    type,
    url,
  };
}

function parseEnvCards(): Card[] {
  const cards: Card[] = [];
  const count = parseEnvInt(process.env.CONTENT_CARD_COUNT, 0);
  if (count >= 1) {
    const card1 = createCard(
      process.env.CONTENT_CARD_1_TYPE,
      process.env.CONTENT_CARD_1_URL
    );
    if (card1) {
      cards.push(card1);
    }
  }
  if (count >= 2) {
    const card2 = createCard(
      process.env.CONTENT_CARD_2_TYPE,
      process.env.CONTENT_CARD_2_URL
    );
    if (card2) {
      cards.push(card2);
    }
  }
  return cards;
}

export function parseEnvironmentVariables(): Environment {
  const defaultConfig: Environment = {
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
    landscape: true,
    content: {
      cards: [],
    },
  };

  return {
    development: parseEnvDevelopment(process.env.NODE_ENV, false),
    touch: parseEnvBoolean(process.env.URL_LAUNCHER_TOUCH, defaultConfig.touch),
    touchSimulate: parseEnvBoolean(
      process.env.URL_LAUNCHER_TOUCH_SIMULATE,
      defaultConfig.touchSimulate
    ),
    frame: parseEnvBoolean(process.env.URL_LAUNCHER_FRAME, defaultConfig.frame),
    kiosk: parseEnvBoolean(process.env.URL_LAUNCHER_KIOSK, defaultConfig.kiosk),
    nodeIntegration: parseEnvBoolean(
      process.env.URL_LAUNCHER_NODE,
      defaultConfig.nodeIntegration
    ),
    width: parseEnvInt(process.env.URL_LAUNCHER_WIDTH, defaultConfig.width),
    height: parseEnvInt(process.env.URL_LAUNCHER_HEIGHT, defaultConfig.height),
    title: parseEnvString(process.env.URL_LAUNCHER_TITLE, defaultConfig.title),
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
    landscape: parseEnvBoolean(
      process.env.URL_LAUNCHER_LANDSCAPE,
      defaultConfig.landscape
    ),
    content: {
      cards: parseEnvCards(),
    },
  };
}
