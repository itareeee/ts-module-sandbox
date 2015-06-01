var controllers;
(function (controllers) {
    var login;
    (function (login) {
        var LoginController = (function () {
            function LoginController(someString) {
                this.someString = someString;
                console.log('const arg: ', someString);
            }
            LoginController.prototype.echoMyString = function () {
                console.log('echo mine: ', this.someString);
            };
            LoginController.prototype.echoMyStringPrivate = function () {
                console.log('private echomine: ', this.someString);
            };
            return LoginController;
        })();
        login.LoginController = LoginController;
    })(login = controllers.login || (controllers.login = {}));
})(controllers || (controllers = {}));

var directives;
(function (directives) {
    var common;
    (function (common) {
        function runDirectives() {
            console.log('init directives!');
        }
        common.runDirectives = runDirectives;
    })(common = directives.common || (directives.common = {}));
})(directives || (directives = {}));

var controllers;
(function (controllers) {
    var login;
    (function (login) {
        function doSomething() {
            console.log('doSomething');
        }
        login.doSomething = doSomething;
        function doSomething2() {
            console.log('doSomething2');
        }
    })(login = controllers.login || (controllers.login = {}));
})(controllers || (controllers = {}));

var routing;
(function (routing) {
    var login;
    (function (login) {
        var ctrl = controllers.login;
        function run() {
            ctrl.doSomething();
            var loginCtrl = new ctrl.LoginController('kitaly');
            loginCtrl.echoMyString();
        }
        login.run = run;
    })(login = routing.login || (routing.login = {}));
})(routing || (routing = {}));
routing.login.run();

//# sourceMappingURL=login-routing-8ec6e3c166.js.map