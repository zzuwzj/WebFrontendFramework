define(function (require, exports, module) {
    // require reference
    var $ = require('jquery');
    var hello = require('app/hello');

    // exports interface
    exports.run = function(){
        hello.SayHello('Sea');
    };
});
