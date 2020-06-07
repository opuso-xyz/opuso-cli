import * as chalk from 'chalk';
import { Tag, Todo } from '../models';

import Table = require('cli-table');

class PrettyPrint {
  static todoTable(todos: Todo[]): string {
    const table = new Table({
      head: [
        chalk.blueBright('id'),
        chalk.blueBright('title'),
        chalk.blueBright('description'),
        chalk.blueBright('tags'),
        chalk.blueBright('complete'),
      ],
    });
    todos.forEach((todo) => {
      const {
        id, title, content, tags, complete,
      } = todo;
      table.push([chalk.whiteBright(id).toString(), chalk.whiteBright.bold(title).toString(), chalk.whiteBright(content).toString(), tags.map((tag) => this.tagForPrint(tag)).join(', '), chalk.whiteBright(complete).toString()]);
    });
    // Sort the table so non completed todos are first
    return table.sort((x, y) => Number(x) - Number(y)).reverse().toString();
  }

  static tagForPrint(tag: Tag): string {
    if (tag.color) {
      return chalk.whiteBright.bgHex(tag.color)(tag.title);
    }
    return tag.title;
  }
}

export default PrettyPrint;
