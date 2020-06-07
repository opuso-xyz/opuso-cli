import { Command } from '@oclif/command';
import cli from 'cli-ux';
import * as chalk from 'chalk';
import auth from '../utils/auth.service';
import Utils from '../utils/utils';

export default class Signup extends Command {
  static description = 'Sign up with a new user account'

  async run() {
    const user = await auth.getCurrentUser();
    if (user) {
      this.error(chalk.red(`You're already logged in as ${user.name}! Please logout first before creating a new user`));
    } else {
      const name = await cli.prompt("What's your name?");
      if (Utils.validateName(name)) {
        const email = await cli.prompt('What\'s your email?');
        if (Utils.validateEmail(email)) {
          const password = await cli.prompt('Choose your password?', { type: 'hide' });
          const confirmPassword = await cli.prompt('Choose your password?', { type: 'hide' });
          if (password === confirmPassword) {
            try {
              const newUser = await auth.signupUser(email, password, name);
              this.log(`${chalk.green('[Success]')} Awesome! You've signed up as ${newUser.name}`);
            } catch (e) {
              this.error(chalk.red(e));
            }
          } else {
            this.error(chalk.red("Passwords don't match, please try again!"));
          }
        } else {
          this.error(chalk.red('Not a valid email!'));
        }
      } else {
        this.error(chalk.red('Name must only contain upper or lowercase letters!'));
      }
    }
  }
}
