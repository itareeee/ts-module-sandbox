/// <reference path="../controllers/signup/signup-controller.ts" />
/// <reference path="../directives/common/common-directive.ts" />

module routing.signup {
  import ctrl = controllers.signup;

  export function run(){
    var signupCtrl = new ctrl.SignupController(121);
    signupCtrl.printSomeNum();
  }
}

routing.signup.run();
