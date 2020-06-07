import { Hook } from '@oclif/config';
import appLocalStorage from '../utils/app-local-storage';

// eslint-disable-next-line func-names
const hook: Hook<'init'> = async function () {
  await appLocalStorage.initialize();
};

export default hook;
