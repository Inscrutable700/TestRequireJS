require(['text!test/text.txt', 'foo', 'domReady!'], function(test, foo) {
    document.body.appendChild(document.createTextNode(test));
    console.log(foo.getBody());
});