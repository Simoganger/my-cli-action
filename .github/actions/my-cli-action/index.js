const core = require('@actions/core');
const { execSync } = require('child_process')


async function run() {
    core.info("An info message from core");
    core.debug("A debug message from core");
    try {
        const version = core.getInput('version') || 'latest';
        const scriptFile =  `'${__dirname}/install-aws.sh'`
        console.log(`Installing MyCLI version: ${version}...`);

        execSync(`bash ${scriptFile}`, { stdio: 'inherit' });

        console.log("MyCLI installed successfully.");
    } catch(error) {
        core.setFailed(`Installation failed: ${error.message}`);
    }
}

run();