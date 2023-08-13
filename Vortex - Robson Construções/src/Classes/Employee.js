export default class Employee{
    #code;
    #name;
    #jobCode;

    constructor(code, name, jobCode){
        this.#code = code;
        this.#name = name;
        this.#jobCode = jobCode;
    }

    get name(){
        return this.#name;
    }

    get jobCode(){
        return this.#jobCode;
    }
}