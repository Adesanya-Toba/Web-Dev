"use strict";
let age = 30;
let sales = 123_456_789;
let course = "typescript";
let is_published = true;
let level;
level = 1;
level = 'hellos';
console.log("Hello world!");
function render(document) {
    document = "hello from typescript";
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach(n => n.toString);
console.log(numbers);
let user = [1, "Brian"];
user.push(8);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
let thisTemp = 0;
function calculateTax(income, taxYear = 2019) {
    if (taxYear < 2022)
        return income * 1.20;
    return income * 1.5;
}
calculateTax(10_000);
let employee = {
    id: 1,
    name: "Brian",
    retire: (date) => {
        console.log(date);
    }
};
employee.age = 90;
let employee2 = {
    id: 9001,
    name: "Bruce",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
//# sourceMappingURL=index.js.map