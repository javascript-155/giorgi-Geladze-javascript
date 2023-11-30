// ! 1
// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი 
// მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. 
//შეასრულეთ ეს დავალება ციკლების მეშვეობით.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i<array.length; i++) {
//     if (array[i] % 3 === 0) {
//         console.log(array[i]);
//     }
// }


// ! 2
// შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს.
// მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

// for (let k = 10; k > 0; k--) {
//     console.log(k);
// }

// ! 3
// მოცემული მასივიდან
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე.
// შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
// for(i=0; i<names.length; i++){
//     if(names[i] === 'Bob'){
//         names[i] = '';
//     }
// }
// console.log(names);

// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
// const Replaced = names.replaceAll('Bob', 'John');
// console.log(Replaced);


// ! 4
//ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: numberPower(number, power) და პარამეტრებით: number, power, მაგ. 
//თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

// function quality(number, power){
//     if (number > 0 && power > 0) {
//         for(let i; i<power.length; i++){
//         }
//         return number*power.length;
//     } else if (number > 0 && power < 0) {
//         for(let i; i>power.length; i--){
//         }
//         return number*power.length;
//     } else if (number < 0 && power > 0) {
//         for(let i; i>power.length; i++){
//         }
//         return number*power.length;
//     } else if (number < 0 && power < 0) {
//         for(let i=0; i>power.length; i--){
//         }
//         return number*power.length;
//     } else {
//         return("enter valid number and power");
//     }
// }
// let number = prompt("enter valid number:");
// let power = prompt("enter valid power:");
// console.log(quality(number, power));


// ! 5
//შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს 
//თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას
// რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე 
//ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ 
//და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც 
//უნაშთოდ გამოიტანეთ FizzBuzz.

// for(i=1; i<100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log(i + " FizzBuzz");
//     } else if (i % 5 === 0){
//         console.log(i + " Buzz");
//     } else if (i % 3 === 0){
//         console.log(i + " Fizz");
//     } else {
//         console.log(i);
//     }
// }
// console.log(i);



// ! 6
//შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), 
//რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის 
//სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120

// function factorialCalculator(number){
//     if(number === 0 || number === 1 || number < 0){
//         return 1;
//     } else {
//         let result = 1;
//         for (let i = 2; i <= number; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }
// let ricxvi = prompt("enter a number: ");
// factorialCalculator();
// console.log(ricxvi + "!=" + factorialCalculator(parseInt(ricxvi)));


// ! 7
// შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის 
// კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: 
// Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს

// let text = "javascript";
// const changedText = text.replace("j", "J");
// console.log(changedText);
// ან
// const changedText2 = text[0].toUpperCase();
// const changedText3 = text.slice(1);
// console.log(changedText2 + changedText3);


// ! 8
// შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი
// ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is
// blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

// testString = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
// function blankStringChecker(testString) {
//     if (testString === null) {
//         console.log("this string is blank");
//     } else {
//         console.log("this string is not blank");
//     }
// }
// blankStringChecker();



// ! 9
// შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ.
// stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის
// ვერსიას მასივში. [“Hello”, “World”]

// let text = "Hello, world"
// function stringToArray(testString) {
//     let toarray = text.split("");
//     console.log(toarray);
// }
// stringToArray();

// ! 10
// შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი
// მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ
// თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს
// მის დაცულ ვერსიას ამ ფორმით: beqa……..@gmail.com.
// წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს

// let email = prompt("enter email like this: Nelson.Mondella@gmail.com");

// function emailchecker(email) {
//     for (let i = 0; i < email.length; i++) {
//         if (email[i] === "." && email[i] <= "@") {
//             for (let j = (email[i] === ".") + 1; j < email.length; j++) {
//                 let changer = email.replace(j, ".");
//             }
//         }
//     }
//     return changer;
// }
// let changer = emailchecker(email);
// console.log(changer);