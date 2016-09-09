function Object(){
  this.length = 5;
  this.width = 3;
  this.color = "yellow";
}

Object.prototype.grow = function(number){
  this.length += number;
};

Object.prototype = {
  get area() {
    return this.length * this.width
  }

  set size() {

  }
}
what is the internet
An object has a property and behaviour

state

setter method in private?

getters/setters

each object should own its own data

encapsulation ensures that people uses your objects the way you intended them to be used

private properties and methods are often just conventions and not necessarily enforced

definition of an object
encapsulation
when you write code, you're writing code for other developers to read, refactor and maintain
