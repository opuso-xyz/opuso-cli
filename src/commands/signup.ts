import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';
import auth from '../utils/auth';
import Utils from '../utils/utils';

export default class Signup extends Command {
  static description = 'Sign up with a new user account'

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  async run() {
    const user = await auth.getCurrentUser();
    if (user) {
      this.log(`You're already logged in as ${user.name}! Please logout first before creating a new user`);
    } else {
      const name = await cli.prompt("What's your name?");
      if (Utils.validateName(name)) {
        const email = await cli.prompt('What\'s your email?');
        if (Utils.validateEmail(email)) {
          const password = await cli.prompt('Choose your password?', { type: 'hide' });
          const confirmPassword = await cli.prompt('Choose your password?', { type: 'hide' });
          if (password === confirmPassword) {
            const newUser = await auth.signupUser(email, password, name);
            this.log(`Awesome! You've signed up as ${newUser.name}`);
          } else {
            this.log("Passwords don't match, please try again!");
          }
        } else {
          this.log('Not a valid email!');
        }
      } else {
        this.log('Name must only contain upper or lowercase letters!');
      }
    }
  }
}
