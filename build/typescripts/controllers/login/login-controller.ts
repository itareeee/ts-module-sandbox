
module controllers.login {
  export class LoginController {
    constructor(
      private someString: string
    ){
      console.log('const arg: ', someString);
    }
  
    echoMyString(): void {
      console.log('echo mine: ', this.someString);
    }

    private echoMyStringPrivate(): void {
      console.log('private echomine: ', this.someString);
    }
  }
}
