import { MainProcess } from './src/MainProcess';

try {
  const mainProcess = new MainProcess();
  mainProcess.start();
} catch (error) {
  console.error('Failed to start electron main process. Reason: ', error);
}
