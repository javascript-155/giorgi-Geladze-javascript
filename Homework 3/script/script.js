// ! task 1
// let num1 = prompt("enter number:");
// let num2 = num1 * num1;
// console.log(alert("result: " + num2));



// ! task 2
// let num3 = prompt("enter celsius: ");
// let num4 = num3 * 33.8;
// console.log(alert("result: " + num4 + "F"));



// ! task 3
// ! ეს ტასკი ვერ გავიგე, რაა საჭირო?
// let num = prompt("enter number: ");

// function test(num, num6, num7) {
//     if (num >= 0 && num <=25) {
//         console.log(alert("result: " + num + "is in 0-25");
//     } else if (num > 25 && num <=50) {
//         console.log(alert("result: " + num + "is in 25-50");
//     } else if (num > 50 && num <=75) {
//         console.log(alert("result: " + num + "is in 50-75");
//     } else if (num > 75 && num <=100) {
//         console.log(alert("result: " + num + "is in 75-100");
//     } else {
//         console.log(alert("result: " + num + "is not in 0-100 area");
//     }
//     return 0;
// }


// ! task 4
// let year = prompt("Enter year: ");
// function years(year) {
//     if (year % 4 !== 0) {
//         console.log("is not a leap year");
//         alert(year + " is not a leap year");
//     } else if (year % 100 !== 0 || year % 400 === 0) {
//         console.log("is a leap year");
//         alert(year + " is a leap year");
//     } else {
//         console.log("is not a leap year");
//         alert(year + " is not a leap year");
//     }
// }

// years(year);

// ! task 5 

// let vegetables = prompt("Enter vegetables: ");
// switch (vegetables) {
//     case "carrot":
//         alert("Hello");
//         break;
//     case "broccoli":
//         alert("welcome");
//         break;
//     default:
//         alert("neither");
// }

// ! task 6
let action = prompt("move");

switch (action) {
    case "move":
        alert("you are moving!");
        break;
    case "jump":
        alert("you are jumping!");
        break;
    case "run":
        alert("you are running!");
        break;
    default:
        alert("invalid action!");
}

