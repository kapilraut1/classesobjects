class hola {
  constructor(box, copy) {
    this.box = box;
    this.copy = copy;
  }
  sleep() {
    console.log("hihia");
  }
}

let hey = new hola("champ", 1);
console.log(hey);

// inheritence
class slow extends hola {
    constructor(box,copy){
        super(box,copy);
        console.log("Lets go");
        this.box = box;
        this.copy = copy;
    }
    // Method overriding and super keyword
    sleep(){
        super.sleep();
        console.log("og");
    }
  eats() {
    console.log("sleep");
  }
}

let hi = new slow("king", 2);
console.log(hi);

