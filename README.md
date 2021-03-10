# Torch-ly CLI

This is a small command line tool to interact with torch-ly.

## Installation

The torchly CLI can be installed with npm using the following command.

```Bash
npm i -g torch-ly-cli
```

## Requirements

* npm
* NodeJS

Both can be installed using the installation guide from [npmjs.com](https://www.npmjs.com/get-npm).

## Usage

A the current verion of this CLI tool there is only one command supported. It posts an image in base64 format to a server. The server can distribute the image to other users.

Send file using:
```Bash
torchly send <file>
```

Get help using:
```Bash
torchly --help
```
and
```Bash
torchly send --help
```

There is also a configuration command, which can change the backend server and port.

```Bash
torchly config --server http://localhost --port 5000
```

The current configuration can be viewed with `torchly config ls`.
