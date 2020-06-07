opuso
=====

TODO CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/opuso.svg)](https://npmjs.org/package/opuso)
[![Downloads/week](https://img.shields.io/npm/dw/opuso.svg)](https://npmjs.org/package/opuso)
[![License](https://img.shields.io/npm/l/opuso.svg)](https://github.com/caelinsutch/]/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g opuso
$ opuso COMMAND
running command...
$ opuso (-v|--version|version)
opuso/0.0.0 linux-x64 node-v14.1.0
$ opuso --help [COMMAND]
USAGE
  $ opuso COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`opuso delete ID`](#opuso-delete-id)
* [`opuso edit ID`](#opuso-edit-id)
* [`opuso finish [ID]`](#opuso-finish-id)
* [`opuso help [COMMAND]`](#opuso-help-command)
* [`opuso list`](#opuso-list)
* [`opuso login`](#opuso-login)
* [`opuso logout`](#opuso-logout)
* [`opuso new TITLE DESCRIPTION`](#opuso-new-title-description)
* [`opuso signup`](#opuso-signup)

## `opuso delete ID`

Fully deletes a todo

```
USAGE
  $ opuso delete ID

ARGUMENTS
  ID  ID of the tag to delete

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/delete.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/delete.ts)_

## `opuso edit ID`

Edit a specific todo by ID

```
USAGE
  $ opuso edit ID

ARGUMENTS
  ID  ID of the todo to edit

OPTIONS
  -a, --title=title              Title of the todo
  -d, --description=description  Description of the todo
  -h, --help                     show CLI help
  -t, --tags=tags                A list of tags separated by commas
```

_See code: [src/commands/edit.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/edit.ts)_

## `opuso finish [ID]`

Marks a todo as completed

```
USAGE
  $ opuso finish [ID]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/finish.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/finish.ts)_

## `opuso help [COMMAND]`

display help for opuso

```
USAGE
  $ opuso help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_

## `opuso list`

List all current todos

```
USAGE
  $ opuso list

OPTIONS
  -a, --all      Show all todos, including completed ones
  -f, --force
  -h, --help     show CLI help
  -t, --tag=tag  Filter by a specific tag
```

_See code: [src/commands/list.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/list.ts)_

## `opuso login`

Login to your Opuso account

```
USAGE
  $ opuso login
```

_See code: [src/commands/login.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/login.ts)_

## `opuso logout`

Log out of the current user account

```
USAGE
  $ opuso logout
```

_See code: [src/commands/logout.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/logout.ts)_

## `opuso new TITLE DESCRIPTION`

Create a new todo

```
USAGE
  $ opuso new TITLE DESCRIPTION

ARGUMENTS
  TITLE        Title of the todo
  DESCRIPTION  Todos description

OPTIONS
  -h, --help       show CLI help
  -t, --tags=tags  A list of tags separated by commas
```

_See code: [src/commands/new.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/new.ts)_

## `opuso signup`

Sign up with a new user account

```
USAGE
  $ opuso signup
```

_See code: [src/commands/signup.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/signup.ts)_
<!-- commandsstop -->
`* [`opuso delete [FILE]`](#opuso-delete-file)
* [`opuso edit [FILE]`](#opuso-edit-file)
* [`opuso finish [FILE]`](#opuso-finish-file)
* [`opuso help [COMMAND]`](#opuso-help-command)
* [`opuso list [FILE]`](#opuso-list-file)
* [`opuso login`](#opuso-login)
* [`opuso logout`](#opuso-logout)
* [`opuso new [FILE]`](#opuso-new-file)
* [`opuso signup`](#opuso-signup)
* [`opuso todo OPERATION`](#opuso-todo-operation)

## `opuso delete [FILE]`

describe the command here

```
USAGE
  $ opuso delete [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/delete.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/delete.ts)_

## `opuso edit [FILE]`

describe the command here

```
USAGE
  $ opuso edit [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/edit.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/edit.ts)_

## `opuso finish [FILE]`

describe the command here

```
USAGE
  $ opuso finish [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/finish.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/finish.ts)_

## `opuso help [COMMAND]`

display help for opuso

```
USAGE
  $ opuso help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_

## `opuso list [FILE]`

describe the command here

```
USAGE
  $ opuso list [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/list.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/list.ts)_

## `opuso login`

Login to your Opuso account

```
USAGE
  $ opuso login
```

_See code: [src/commands/login.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/login.ts)_

## `opuso logout`

Log out of the current user account

```
USAGE
  $ opuso logout
```

_See code: [src/commands/logout.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/logout.ts)_

## `opuso new [FILE]`

describe the command here

```
USAGE
  $ opuso new [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/new.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/new.ts)_

## `opuso signup`

Sign up with a new user account

```
USAGE
  $ opuso signup
```

_See code: [src/commands/signup.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/signup.ts)_
