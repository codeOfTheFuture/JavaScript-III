/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global this - this keyword refers to the window object
 * 2. Implicit this - whenever a method is called on an object this keyword refers to whatever is to the left of the dot.
 * 3. New this - when a constructor function is created this keyword refers to the instance of an object that is returned from the constructor function using the new keyword.
 * 4. Explicit this - when the call or apply methods are used on a function the context of this is passed into call or apply along with arguments.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function addNums(num1, num2) {
  console.log(this);
  return num1 + num2;
}

addNums(5, 4);

// Principle 2

// code example for Implicit Binding
let person = {
  firstName: 'John',
  lastName: 'Doe',
  introduction: function(age) {
    console.log(
      `Hi, my name is ${this.firstName} ${
        this.lastName
      } and i am ${age} years old.`
    );
  }
};

person.introduction(30);

// Principle 3

// code example for New Binding
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.info = function() {
    console.log(
      `${this.title} was written by ${
        this.author
      } and was published in the year ${this.year}`
    );
  };
}

const book1 = new Book('The Catcher in the Rye', 'J. D. Salinger', 1951);

const book2 = new Book('Of Mice and Men', 'John Steinbeck', 1937);

book1.info();
book2.info();

// Principle 4

// code example for Explicit Binding

let favoriteTeam = {
  league: 'NFL',
  city: 'Buffalo',
  teamName: 'Bills',
  round: {
    first: 'first round',
    second: 'second round'
  }
};

let draftPicks = ['DT Ed Oliver', 'T Cody Ford'];

function whoDidTheyDraft(player1, player2) {
  console.log(
    `In the ${this.round.first} of the 2019 ${this.league} draft the ${
      this.city
    } ${this.teamName} selected ${player1}. In the ${this.round.second} the ${
      this.teamName
    } selceted ${player2}.`
  );
}

whoDidTheyDraft.call(favoriteTeam, ...draftPicks);
