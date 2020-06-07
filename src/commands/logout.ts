import { Command, flags } from '@oclif/command';

export default class Logout extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    // eslint-disable-next-line no-shadow
    const { args, flags } = this.parse(Logout);

    const name = flags.name ?? 'world';
    this.log(`hello ${name} from /home/caelin/Github/opuso/src/commands/logout.ts`);
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
