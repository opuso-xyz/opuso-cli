import { Command, flags } from '@oclif/command';
import cli from 'cli-ux';
import auth from '../utils/auth';

export default class Login extends Command {
  static description = 'Login to your Opuso account'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = []

  async run() {
    let user = await auth.getCurrentUser();
    if (user) {
      this.log(`You're already logged in as ${user.name} with the email ${user.email}`);
    } else {
      const email = await cli.prompt('What\'s your email?');
      const password = await cli.prompt('What\'s your password?', { type: 'hide' });
      // const {args, flags} = this.parse(Login)

      user = await auth.loginUser(email, password);

      this.log(`Awesome! You've logged in as ${user.name}`);
    }
  }
}
