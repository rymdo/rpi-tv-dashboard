import { MainRenderer } from './src/MainRender';

try {
  const mainRenderer = new MainRenderer();
  mainRenderer.start();
} catch (error) {
  console.error('Failed to start electron main renderer. Reason: ', error);
}
