// first task

let array = [1, 2, 3, ,4 ,5 , 6, 7, 8, 9, 10];
let p = true;

if (Array.isArray(array)) {
    console.log("this is array");
} else {
    console.log("this is not array");
}

// second task

console.log(array[0]);

// third task

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

for (let i = 0; i < color.length; i++) {
    let row = i + 1;
    let choice = "choice";

    if (row == 1 ) {
        choice = "st " + "choice";
    } else if (row == 2) {
        choice = "nd " + "choice";
    } else if (row == 3) {
        choice = "rd " + "choice";
    } else {
        choice = "th " + "choice";
    } 

    let sia = row + choice + " is " + color[i];
    console.log(sia);
}

// fourth task

let student = {
    name: "nelson",
    lastname: "mandela",
    age: 30,
    friends: [
        {
            name: "Nikola",
            age: 2
        },
        {
            name: "george",
            age: 20
        },
        {
            name: "einshtain",
            age: 17
        }
    ]
}

student.name = "george";
console.log(student.name);

delete student.friends[0].age;
console.log(student.friends[0].age);

student.lastname = "washington";
console.log(student.lastname);