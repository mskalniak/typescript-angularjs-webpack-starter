export class MsHomeController {
    styles: any;
    greeting: string;
    name: string;

    constructor() {
        this.styles = require('./ms-home.component.local.less');
        this.name = 'MsHome';
        this.greeting = 'hello!';
    }

    greet() {
        return "Hello, " + this.greeting;
    }
} 