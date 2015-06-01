/// <reference path="../controllers/login/login-controller.ts" />
/// <reference path="../directives/common/common-directive.ts" />
/// <reference path="../controllers/login/login-side-controller.ts" />


module routing.login {
  import ctrl = controllers.login;

  export function run(){
    ctrl.doSomething();

    var loginCtrl = new ctrl.LoginController('kitaly');
    loginCtrl.echoMyString();
  }
}

routing.login.run();
