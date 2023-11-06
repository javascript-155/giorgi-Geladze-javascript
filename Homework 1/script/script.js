let firstname = prompt("შეიყვანე შენი სახელი");
let lastname = prompt("შეიყვანე შენი გვარი");
let currentyear = 2023;
let birthdate = prompt("შეიყვანე შენი დაბადების წელი");
let address = prompt("შეიყვანე შენი საცხოვრებლის სახელი");

var fullage = currentyear - birthdate;

alert("გამარჯობა " + firstname + " " + lastname + ", მიხარია რომ უკვე " + 
fullage + " წლის ხარ და " + address + "-ში ცხოვრობ");

