module.exports = {
    timeout: function(ms) {
        console.log('Esperando ' + ms + ' ms...');
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    screenshot: async function(page, pageName) {
        await page.property('viewportSize', {
            width: 1280,
            height: 800
        });
        return await page.render(pageName + '.png');
    }
}