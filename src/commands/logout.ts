import { Command } from '@oclif/command';
import * as chalk from 'chalk';
import appLocalStorage from '../utils/app-local-storage';
import auth from '../utils/auth.service';

export default class Logout extends Command {
  static description = 'Log out of the current user account';

  async run() {
    if (await appLocalStorage.getData('user')) {
      try {
        await auth.logoutUser();
        this.log(`${chalk.green('[Success]')} Successfully logged out!`);
      } catch (e) {
        this.error(chalk.red(e));
      }
    } else {
      this.error(chalk.red('No user currently logged in!'));
    }
  }
}
