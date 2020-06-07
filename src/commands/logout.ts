import { Command, flags } from '@oclif/command';
import appLocalStorage from '../utils/app-local-storage';
import auth from '../utils/auth';

export default class Logout extends Command {
  static description = 'Logout of the current user account'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  async run() {
    if (await appLocalStorage.getData('user')) {
      await auth.logoutUser();
      this.log('Logging out the current user...');
    } else {
      this.log('No user currently logged in!');
    }
  }
}
