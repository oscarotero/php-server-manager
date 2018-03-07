# PHP Server Manager

Package to manage the PHP built-in server from node.

## Install

```
yarn add php-server-manager
```

## Usage

```js
const PHPServer = require('php-server-manager');

const server = new PHPServer();

server.run(cb); // http://localhost:8000
```

## Callback vs Promise

You can pass a callback to the run method, this will get called when the PHP server is up and running. If you don't pass a callback to the run method, a promise will be returned that resolves when the PHP server is up and running.

## Configuration

Name | Default | Description
-----|---------|------------
`php` | `php` | The php command file
`host` | `127.0.0.1` | The server's host
`port` | `8000` | The port used
`directory` | `null` | The document root. By default is the current working directory
`script` | `null` | The "router" script
`stdio` | `inherit` | stdio option passed to the spawned process - https://nodejs.org/api/child_process.html#child_process_options_stdio
`directives` | `{}` | An object with the custom PHP directives
`config` | `null` | The path of a custom php.ini file
`env` | `process.env` | The environment variables passed

Example:

```js
const PHPServer = require('php-server-manager');

const server = new PHPServer({
    port: 3000,
    directives: {
        display_errors: 0,
        expose_php: 0
    }
});

server.run();
```

## Quick use

You can use the static function `start()` to create and run a PHPServer in a single line:

```js
PHPServer.start();
```

## Use with gulp

```js
gulp.task('php-server', () =>
    PHPServer.start({
        directory: 'public',
        script: 'public/index.php'
    })
);
```
