export class <%= upModuleName %>Controller {
    styles: any;
    greeting: string;
    name: string;

    constructor() {
        this.styles = require('./<%= module %>-<%= name %>.directive.local.less');
        this.name = '<%= upModuleName %>';
        this.greeting = 'hello!';
    }

    greet() {
        return "Hello, " + this.greeting;
    }

} 