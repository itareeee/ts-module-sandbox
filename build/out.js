/// <referrence path="../controllers/login/login-controller.ts">
/// <referrence path="../controllers/login/login-side-controller.ts">
var ctrl = controllers.login;
ctrl.doSomething();
var loginCtrl = new ctrl.LoginController('kitaly');
loginCtrl.echoMyString();
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

//# sourceMappingURL=out.js.map