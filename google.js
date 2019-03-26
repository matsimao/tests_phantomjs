const phantom = require('phantom');
const helpers = require('./src/helpers');

(async () => {
    const instance = await phantom.create();
    const page     = await instance.createPage();

    await page.setting('userAgent', 'Mozilla/5.0 (X11; Linux x86_64; rv:66.0) Gecko/20100101 Firefox/66.0');

    await page.open('https://www.google.com/').then(async (status) => {
        if (status === 'success') {

            await helpers.screenshot(page, 'src/img/google/tela_inicial');
            
            let google_logo = await page.evaluate(function() {
                return document.querySelector('#hplogo').getBoundingClientRect();
            });
            
            await page.property('clipRect', google_logo)
            
            await page.render('src/img/google/logo.png');
        }
    });

    instance.exit();
})();