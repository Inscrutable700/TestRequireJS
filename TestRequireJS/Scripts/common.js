require.config({
    baseUrl: 'Scripts',
    paths: {
        jquery: 'libs/jquery-1.10.2',
        text: 'libs/text',
        domReady: 'libs/domReady',
    }
});

require(['jquery', 'domReady!'], function($) {
    $('body').append('<b>bold</b>');
});