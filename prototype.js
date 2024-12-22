// Prototype is one of the property of js object that is either null or references other object.

let ob= {
    a: 1,
    b:2
}
console.log(ob);


const animal={
    eats: true,
}

const kangaroo ={
    sleeps: true,
}

//sets prototype
kangaroo.__proto__= animal;
