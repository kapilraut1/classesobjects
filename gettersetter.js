class oop{
    constructor(name){
        this._name= name;
    }
 get name(){
    return this._name;
 }
set name(data){
    this._name= data;
    console.log("This is set");
}
}

let hari= new oop("Shyam");
hari.name= "Krishna";
console.log(hari);