export default class Job{
    #name;
    #wage;
    #code;

    constructor(name, wage, code){
        this.#name = name;
        this.#wage = wage;
        this.#code = code;
    }

    get name(){
        return this.#name;
    }

    get code(){
        return this.#code;
    }

    get wage(){
        return this.#wage;
    }
}