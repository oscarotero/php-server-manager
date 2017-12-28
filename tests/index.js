const assert = require('assert');
const PHPServer = require('../');

describe('Command builder', function () {
    it('Default command', function () {
        assert.equal('php -S 127.0.0.1:8000', (new PHPServer()).toString());
    });

    it('Default command', function () {
        assert.equal(
            './php -S 0.0.0.0:3000 -t /my-dir -d display_errors=0 -d expose_php=0 -c /my-config.ini /my-dir/index.php',
            (new PHPServer({
                php: './php',
                host: '0.0.0.0',
                port: 3000,
                directory: '/my-dir',
                script: '/my-dir/index.php',
                directives: {
                    display_errors: 0,
                    expose_php: 0
                },
                config: '/my-config.ini'
            })).toString());
    });
});