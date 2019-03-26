require('dotenv').config();
const phantom = require('phantom');
const helpers = require('./src/helpers');

(async () => {
    const instance = await phantom.create();
    const page     = await instance.createPage();

    await page.setting('userAgent', 'Mozilla/5.0 (X11; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0');

    await page.open('https://www.facebook.com/').then(async (status) => {
        if (status === 'success') {
            await page.evaluate(function(_env) {
                document.querySelector('#email').value = _env.LOGIN_FACEBOOK;
                document.querySelector('#pass').value  = _env.PASS_FACEBOOK;
                return true;
            }, process.env);

            await helpers.screenshot(page, 'src/img/facebook/tela_login');

            await page.evaluate(function() {
                document.querySelector('#u_0_2').click();
                return true;
            });

            await helpers.timeout(10000);

            await helpers.screenshot(page, 'src/img/facebook/tela_inicial');
        }
    });

    instance.exit();
})();