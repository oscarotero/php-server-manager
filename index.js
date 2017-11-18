const spawn = require('child_process').spawn;

module.exports = class PHPServer {
    constructor(config) {
        this.php = 'php';
        this.host = 'localhost';
        this.port = 8000;
        this.directory = null;
        this.script = null;
        this.directives = {};
        this.config = null;

        if (config) {
            Object.keys(config).forEach(name => {
                if (!(name in this)) {
                    throw new Error(`Config ${name} is not valid`);
                }

                this[name] = config[name];
            });
        }
    }

    getParameters() {
        const params = ['-S', `${this.host}:${this.port}`];

        if (this.script) {
            params.push(this.script);
        }

        if (this.directory) {
            params.push('-t');
            params.push(this.directory);
        }

        Object.keys(this.directives).forEach(d => {
            params.push('-d');
            params.push(`${d}=${this.directives[d]}`);
        });

        if (this.config) {
            params.push('-c');
            params.push(this.config);
        }

        return params;
    }

    run() {
        this.process = spawn(this.php, this.getParameters(), {
            stdio: 'inherit'
        });

        this.process.on('close', () => console.log('PHP Server closed'));
        this.process.on('error', error =>
            console.error('PHP Server error', error)
        );
    }

    close() {
        if (!this.process) {
            return;
        }

        this.process.kill();
        delete this.process;
    }

    toString() {
        return `${this.php} ${this.getParameters().join(' ')}`;
    }
};
