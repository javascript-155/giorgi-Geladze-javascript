// ! 1
// 1 - წიჩკა
// 2
// Shape კლასის მეშვეობით პოლიმორფიზმის იმპლემენტაცია:

// დავალების აღწერა:
// ამ დავალებაში თქვენ მოგიწევთ პოლიმორფიზმის კონცეფციაზე მუშაობა, რომელიც გულისხმობს არსებული Shape კლასის გაზრდას ახალი shape კლასით.

// დავალების ეტაპები:


// შექმენით ახალი Html და ჯავასკრიპტ ფაილი: შექმენით ახალი Html ფაილი, რომელსაც დაუკავშირებთ ახალ javascript ფაილს მაგ. სახელად shapes.js, სადაც შეინახავთ საკუთარ კოდს.
// შექმენით მშობელი კლასი სახელად ‘Shape’: მას უნდა გააჩნდეს შემდეგი ატრიბუტები და მეთოდები:
// ატრიბუტები:
// ‘name’ (სტრიქონი) - “shape”-ის სახელის შესანახად.
// მეთოდები:
// constructor(name) - კონსტრუქტორი რომელიც მოახდენს ‘name’ ატრიბუტის ინიციალიზირებას.
// area() - მეთოდი რომელიც ჯერჯერობით დააბრუნებს რაღაც ესეთ შეტყობინებას:
// “Area calculation not implemented for generic shape.”
// შექმენით შვილობილი კლასები: შექმენით შვილობილი კლასები, თითოეული მათგანი უნდა წარმოადგენდეს განსხვავებულ გეომეტრიულ ფიგურას. შვილობილი კლასი მემკვიდრეობით უნდა იღებდეს მონაცემებს “Shape” კლასიდან და ახდენდეს area() მეთოდის ცვლილებას კონკრეტული ფიგურის ფართობის გამოსათვლელად. ეს ფიგურები შეიძლება იყოს:


// ‘Circle()’ (subclass)
// ატრიბუტები:
// 	‘radius’ - (რიცხვი) - წრის რადიუსის შესანახად.
// მეთოდები:
// 	constructor(name, radius) - კონსტრუქტორი რომელიც გამოიყენებს  ‘name’-სა და ‘radius’-ს.
// ‘area()’ - ზედგადაწერილი (ზედგადაწერა მოგიწევთ რადგან ზევით ეს როდესაც შევქმენით “Area calculation not implemented…” ეწერა და ზუსტად აქ ერთვება პოლიმორფიზმი) მეთოდი, წრის ფართობის საანგარიშოდ, შემდეგი ფორმულის გამოყენებით: ‘Math.PI * radius * radius’
// ‘Rectangle’ (subclass)
// ატრიბუტები:
// 	‘width’ (რიცხვი) მართკუთხედის სიგანის ზომის შესანახად.
// 	‘height’ (რიცხვი) მართკუთხედის სიგრძის ზომის შესანახად.
// მეთოდები:
// 	‘constructor(name, width, height)’ - კონსტრუქტორ მეთოდი რომელიც მოახდენს, ‘name, width, და height’ ატრიბუტების ინიციალიზირებას.
// 	‘area()’ - ზედგადაწერილი მეთოდი, რომელიც გამოითვლის მართკუთხედის ფართობს შემდეგი ფორმულით: ‘width * height’.
// ‘Triangle’ (subclass) 
// ატრიბუტები: 
// 	‘base’ (რიცხვი) - სამკუთხედის ფუძის სიგრძის შესანახად.
// 	‘height’ (რიცხვი) - სამკუთხედის სიმაღლის სიგრძის შესანახად.
// მეთოდები:
// 	‘constructor(name, base, height)’ - კონსტრუქტორ მეთოდი რომელიც ახდენს ‘name’, ‘base’ და ‘height’ ატრიბუტების ინიციალიზირებას.
// 	area() - ზედგადაწერილი მეთოდი სამკუთხედის ფართობის დასაანგარიშებლად შემდეგი ფორმულით ‘(base * height) / 2’.


// 4. გატესტეთ პოლიმორფიზმი: შექმენით თითოეული ფიგურის “shape”-ის ობიექტები: მაგ. let triangle = new Triangle(.......), მოახდინეთ პოლიმორფიზმის დემონსტრირება “area()” მეთოდის გამოძახებით თითოეულ ფიგურაზე იქნება ეს სამკუთხედი, წრე თუ მართკუთხედი და გამოიტანეთ დაანგარიშებული ფიგურის ფართობი პლიუს ამ ფიგურის სახელი ეკრანზე.

// კოდი უნდა იძლეოდეს რაღაც ესეთ შედეგს:

// Area of Circle: 78.53981633974483
// Area of Rectangle: 24
// Area of Triangle: 6
// Area calculation not implemented for generic shape


class Shape {
    constructor(name) {
        this.name = name;
    }

    area() {
        console.log("Area calculation not implemented for generic shape.");
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.name = "Circle";
        this.radius = radius;
    }

    area() {
        console.log(Math.PI*this.radius*this.radius);
    }
}

class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.name = "Rectangle";
        this.width = width;
        this.height = height;
    }

    area() {
        console.log(this.width*this.height);
    }
}

class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.name = "Triangle";
        this.base = base;
        this.height = height;
    }

    area() {
        console.log((this.base*this.height)/2);
    }
}

const circle = new Circle("circle", 5);
const rectangle = new Rectangle("rectangle", 4, 6);
const triangle = new Triangle("triangle", 4, 3);
const shape = new Shape("shape");

// ! ან ასე

circle.area();
rectangle.area();
triangle.area();
shape.area();

// !  ან კიდე ასე
function AShape(shape) {
    shape.area();
}

AShape(circle);
AShape(rectangle);
AShape(triangle);