import { Command } from '@oclif/command';
import cli from 'cli-ux';
import * as chalk from 'chalk';
import auth from '../utils/auth';

export default class Login extends Command {
  static description = 'Login to your Opuso account';

  async run() {
    let user = await auth.getCurrentUser();
    if (user) {
      this.error(chalk.red(`You're already logged in as ${user.name} with the email ${user.email}`));
    } else {
      const email = await cli.prompt('What\'s your email?');
      const password = await cli.prompt('What\'s your password?', { type: 'hide' });

      try {
        user = await auth.loginUser(email, password);
      } catch (e) {
        this.error(chalk.red(e));
      }
      this.log(`${chalk.green('[Success]')} Awesome! You've logged in as ${user.name}`);
    }
  }
}
