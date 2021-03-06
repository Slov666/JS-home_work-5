class StringBuilder {
    constructor(_value) {
        this.str = _value;
    }
    get value() {
        return this.str;
    }
    append(str) {
     this.str = this.str + str 
    }
    prepend(str) {
        this.str = str + this.str;
    }
    pad(str){
        this.str = str + this.str + str;
    }
};

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='