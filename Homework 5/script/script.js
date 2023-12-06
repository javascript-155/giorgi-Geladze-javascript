// ! 1
// შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მომხმარებლის მიერ შეყვანილ სტრიქონში. (გამოიყენეთ prompt()-მონაცემების შესაყვანად.)

// function longestword(sentence) {
//     let text = sentence.split(/\s+/);

//     let word = text.reduce(function(accumulate, current){
//         if (accumulate.lenght > current.lenght) {
//             return accumulate;
//         } else {
//             return current;
//         }
//     })

//     return word;
// }

// let input = prompt("enter the sentence:");
// let result = longestword(input);
// console.log("this is a/an longest word in sentence:" + result);
// let windowalert = alert("this is a/an longest word in sentence:" + result);

// ! 2
// შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.

// let calculator = {
//     num1: 10,
//     num2: 5,
//     // ok ლედს გოუ
//     add: function() {
//         return this.num1 + this.num2;
//     },
//     substract: function() {
//         return this.num1 - this.num2;
//     },
//     multiply: function() {
//         return this.num1 * this.num2;
//     },
//     divide: function () {
//         return this.num1 / this.num2;
//     }
// };
// console.log(`num1(${calculator.num1}) + num2(${calculator.num2}) = ${calculator.add()}`);
// console.log(`num1(${calculator.num1}) - num2(${calculator.num2}) = ${calculator.substract()}`);
// console.log(`num1(${calculator.num1}) * num2(${calculator.num2}) = ${calculator.multiply()}`);
// console.log(`num1(${calculator.num1}) / num2(${calculator.num2}) = ${calculator.divide()}`);

// ! 3 
// შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.

welcome();
function welcome() {
    console.log("to GURIA");
}
// პირველ რიგში აუციელბლად ცვლადს გამოცხადება სჭირდება,
// ხოლო ჰოისტინგს არა მისთვის გამოცხადების მნიშვნელობას აბსცისა წრფეზე
// აზრი არ აქვს, განსხვავებით ცვლადებისა