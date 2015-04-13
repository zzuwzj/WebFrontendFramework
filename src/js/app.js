define(function (require, exports, module) {
    // require reference
    var $ = require('jquery');
    var hello = require('app/hello');
    var shell = require('core/Shell');

    // exports interface
    exports.run = function(){
        alert($);
        hello.SayHello('Sea');
        shell.GoToView('homepage');
    };
});
