module controllers.signup {
  export class SignupController {
    
    private someNum: number;

    constructor(someNum: number){
      this.someNum = someNum;
    }  

    public printSomeNum():void {
      console.log(this.someNum);
    }
  }
}
