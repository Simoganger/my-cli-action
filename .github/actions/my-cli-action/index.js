const core = require('@actions/core');
const { execSync } = require('child_process')


async function run() {
    core.log("An info message from core");
    core.debug("A debug message from core");
    try {
        const version = core.getInput('version') || 'latest';
        console.log(`Installing MyCLI version: ${version}...`);

        execSync(`curl -fsSL https://cli.example.com/install.sh | sh`, { stdio: 'inherit' });

        console.log("MyCLI installed successfully.");
    } catch(error) {
        core.setFailed(`Installation failed: ${error.message}`);
    }
}

run();