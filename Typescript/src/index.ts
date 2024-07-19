// Declare a variable using the let keyword
let age:number = 30;
let sales = 123_456_789;
let course: string = "typescript"
let is_published: boolean = true

let level: any

level = 1
level = 'hellos' // not recommended

console.log("Hello world!")

// Creating a function
function render(document:any){
    document = "hello from typescript"
    console.log(document)
}

/****************** ARRAYS ***************************/
let numbers:number[] = [1,2,3]
numbers.forEach(n => n.toString)
console.log(numbers)

/****************** TUPLES ***************************/
// Tuples: fixed length arrays
let user: [number, string]= [1, "Brian"]
user.push(8) // this produces a bug!!


/****************** ENUMS ****************************/
// Enums: list of related constants
enum Size {Small = 1, Medium, Large}
let mySize: Size = Size.Medium
console.log(mySize)

// To get a more optimized js code, use the const keyword for enums
const enum Temperature {
    Celsius,
    Kelvin,
    Fahrenheit,
}
let thisTemp: Temperature = Temperature.Celsius

/****************** FUNCTIONS ***********************/
function calculateTax(income: number, taxYear: number = 2019): number{
    // ?: means parameter is optional, i.e., param will be undefined.
    if (taxYear < 2022)
        return income * 1.20
    return income * 1.5
}

calculateTax(10_000)

/****************** OBJECTS *************************/
let employee:{
    readonly id: number, // Read-only parameter
    name: string,
    age?: number // Optional argument
    retire: (date: Date) => void // object method
} = {
    id:1, 
    name:"Brian",
    retire: (date: Date) => {
        console.log(date)
    }
}

employee.age = 90


/****************** ALIASES **************************/
type Employee = {
    readonly id: number,
    name:string,
    age?:number,
    retire: (date:Date) => void
}

let employee2: Employee = {
    id: 9001,
    name: "Bruce",
    retire: (date: Date) => {
        console.log(date)
    }
}

/****************** UNIONS ****************************/
function kgToLbs(weight: number | string):number{
    // Narrow down the union type
    if (typeof weight === "number")
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
}

/****************** INTERSECTIONS *********************/
let weight: number & string // objects of multiple types
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

// textBox must implement all the methods of the UIWidget type
let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

