/*
//COUNT FROM 1 TO 20, IF NUMBER IS DIVISIBLE BY 3 PRINT 'FIZZ', IF DIVISIBLE BY 5 PRINT 'BUZZ', IF DIVISIBLE BY 3 AND 5 PRINT 'FIZZBUZZ'

for (var i=1; i<=20; i++){
	if ((i % 3 === 0) && (i % 5 === 0)){
		console.log("FizzBuzz");
	}
	else if (i % 5 === 0){
		console.log("Buzz");
	}
	 else if(i % 3 === 0){
		console.log("Fizz");
	}
	else {
		console.log(i);
	}
}
/*



/* 
// CALCULATE AND PRINT AREA AND PERIMETER USING METHODS

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function(){
    return this.sideLength * this.sideLength;
    };

var p = square.calcPerimeter();
var a = square.calcArea();

console.log (p);
console.log (a);
*/



/*
//CUSTOM CONSTRUCTOR EXAMPLE

function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person ("Sally Bowles", 39);
var holden = new Person ("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);
*/



/* 
// ARRAY OF OBJECTS OUR PERSON CONSTRUCTOR
function Person(name, age){
    this.name = name;
    this.age = age;
    }
// Now we can make an array of people
var family = new Array();
family[0] = new Person ("alice", 40);
family[1] = new Person ("bob", 42);
family[2] = new Person ("michelle", 8);
family[3] = new Person ("timmy", 6);

// loop through our new array co
for (var i = 0; i < family.length; i++){
   console.log(family[i].name)
    }
*/




// FUNCTION THAT TAKES OBJECTS AS PARAMETERS
// Our person constructor

function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2){
    if (person1.age >= person2.age){
        return person1.age
        }
        else{
            return person2.age
            }
    };

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));





// OOP PROTOTYPE TO THE RESCUE! - ALL CLASSES CAN USE A METHOD 
/*
function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();
*/



//ACCESSING PRIVATE VARIABLES
/*
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
  //this method returns bankBalance value
   this.getBalance = function() {
      return bankBalance;
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance);  //prints out 7500
*/



//THIS GOES THROUGH ALL THE PROPERTIES OB obj ONE BY ONE AND ASSIGNS THE 
//PROPERTY NAME TO x ON EACH RUN OF THE LOOP
/*
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var x in languages){
    if (typeof languages[x] == "string"){
        console.log(languages[x]);
    }
}
*/



//CASH REGISTER - OOP
/*
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember ("Naty", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount : function(employee){
        this.total -= this.total * (employee.discountPercent / 100);
        }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
*/



// Multiples of 3 and 5 - from project euler
// This program finds the sum of all the multiples of 3 or 5 below 1000.

var i;
var sum = 0;

for (i = 0; i<1000; i++) {
  //console.log(i);
  if ((i % 3 === 0) || (i % 5 ===0)) {
    sum += i;
  }
}
  console.log(sum);






