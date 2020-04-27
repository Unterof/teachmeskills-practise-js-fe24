// Exercise 03:
//Create an object called shape that has the type property and a getType() method.

//Define a Triangle() constructor function whose prototype is shape. Objects created with Triangle() should have three own properties—a, b, and c, representing the lengths of the sides of a triangle.

//Add a new method to the prototype called getPerimeter()

let shape = {
    type: '',
    getType: function(){return this.type;}
  };
  function Triangle (a,b,c){
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
  }
  let t = new Triangle(1, 2, 3)
  t.constructor;

  Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
};
Triangle.prototype.constructor = Triangle;