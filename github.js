require('dotenv').config();
const phantom = require('phantom');
const helpers = require('./src/helpers');

(async () => {
    const instance = await phantom.create();
    const page     = await instance.createPage();

    await page.open('https://github.com/login/').then(async (status) => {
        if (status === 'success') {
            await page.evaluate(function(_env) {
                document.querySelector('#login_field').value = _env.LOGIN_GITHUB;
                document.querySelector('#password').value    = _env.PASS_GITHUB;
                return true;
            }, process.env);

            await helpers.screenshot(page, 'src/img/github/tela_login');

            await page.evaluate(function() {
                document.querySelector('.btn').click();

                return true;
            });

            await helpers.timeout(3000);
            console.log('acabou...');

            await helpers.screenshot(page, 'src/img/github/tela_inicial');
        }
        return status
    });
    instance.exit();
})();