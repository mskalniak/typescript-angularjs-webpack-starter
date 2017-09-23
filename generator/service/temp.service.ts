export class <%= upModuleName %>Service {
  greeting: string;

  constructor() {
    this.greeting = 'hello!';
  }

  hello() {
    return "Hello, " + this.greeting;
  }
}
