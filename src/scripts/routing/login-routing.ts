/// <reference path="../controllers/login/login-controller.ts" />
/// <reference path="../directives/common/common-directive.ts" />
/// <reference path="../controllers/login/login-side-controller.ts" />
/// <reference path="../directives/common/general-directive.ts" />


module routing.login {
  import ctrl = controllers.login;
  import comDir = directives.common;

  comDir.generalDirective();
  export function run(){
    ctrl.doSomething();

    var loginCtrl = new ctrl.LoginController('kitaly');
    loginCtrl.echoMyString();
  }
}

routing.login.run();
