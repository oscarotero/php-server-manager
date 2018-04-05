# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.3.1] - 2018-03-07

### Fixed

- The `env` option merges the environment variables with the existing ones, instead replace the entire object.

## [1.3.0] - 2018-03-07

### Added

- Static function `PHPServer.start()` as a shortcut to `new PHPServer().run()`.
- The callback / promise have the `PHPServer` instance as first argument

## [1.2.1] - 2018-01-02

### Fixed

- Reorder script and other cli options because the script must be declared after the options. (This commit was reverted accidentally in 1.2.0, it's included now).

## [1.2.0] - 2017-12-29

### Added

- New option `stdio` to configure the stdio passed to the spawned process.

### Changed

- If no callback is passed, the `run()` method returns a promise that resolves when the PHP server is up and running.

### Fixed

- Reorder script and other cli options because the script must be declared after the options.

## [1.1.0] - 2017-12-18

### Added

- The function `run()` accepts a callback as first argument, executed when the server is started.
- New option `env` to pass environment variables to the child process.

### Fixed

- Use `127.0.0.1` instead `localhost` as default host.

## 1.0.0 - 2017-11-18

First version with basic features.

[1.3.1]: https://github.com/oscarotero/php-server-manager/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/oscarotero/php-server-manager/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/oscarotero/php-server-manager/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/oscarotero/php-server-manager/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/oscarotero/php-server-manager/compare/v1.0.0...v1.1.0
