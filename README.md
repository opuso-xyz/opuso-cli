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
* [`opuso hello [FILE]`](#opuso-hello-file)
* [`opuso help [COMMAND]`](#opuso-help-command)
* [`opuso login`](#opuso-login)
* [`opuso logout [FILE]`](#opuso-logout-file)
* [`opuso signup [FILE]`](#opuso-signup-file)

## `opuso hello [FILE]`

describe the command here

```
USAGE
  $ opuso hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ opuso hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/hello.ts)_

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

## `opuso login`

Login to your Opuso account

```
USAGE
  $ opuso login

OPTIONS
  -f, --force
  -h, --help   show CLI help
```

_See code: [src/commands/login.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/login.ts)_

## `opuso logout [FILE]`

describe the command here

```
USAGE
  $ opuso logout [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/logout.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/logout.ts)_

## `opuso signup [FILE]`

describe the command here

```
USAGE
  $ opuso signup [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/signup.ts](https://github.com/caelinsutch/%5D/blob/v0.0.0/src/commands/signup.ts)_
<!-- commandsstop -->
