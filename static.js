class hero{
    constructor(name, age){
        this._name= name;
        this._age=age;
    }

    get name(){
        return this._name;
    }

    set name(data){
        this._name= data;
    }
    static rose(x){
        console.log("The roses are confidential"+ x);
    }
}

let salman= new hero("Khan", 54);
salman.name= "Amir";
console.log(salman);
hero.rose("Sid");