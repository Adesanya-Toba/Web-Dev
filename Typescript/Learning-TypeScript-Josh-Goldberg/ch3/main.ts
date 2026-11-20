// Union types
let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";
mathematician?.toLowerCase(); // this is possibly undefined but the '?' handles it, by saying only run toLowerCase if mathematician is not null or undefined
// Otherwise, return undefined.

let thinker: string | null = null;

if (Math.random() > 0.5) {
  thinker = "Susanne Langer";
}

// When a value is known to be a union type, TypeScript will only allow you
// to access member properties that exist on all possible types in the union.
let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;

physicist.toString();

// toUpperCase doesn't exist on numbers
physicist.toUpperCase();
// toFixed doesn't exist on strings
physicist.toFixed();

// Using narrowing
if (physicist === "Marie Curie") {
  physicist.toUpperCase(); // this is now fine
}
if (typeof physicist === "string") {
  physicist.toUpperCase();
}

typeof physicist === "string" ? physicist.toUpperCase() : physicist.toFixed();

// Literal types
const philosopher = "Hypatia"; // philosopher is essentially of type hypatia and cannot be assigned to any other value
philosopher = "hello";

// Literal assignability
let specificallyAda: "Ada"; // specificallyAda is of type "Ada"
specificallyAda = "Ada";
specificallyAda = "Byron"; // type 'Byron' is not assignable

let someString = "";
specificallyAda = someString; // String is not assignable

someString = ":)";

let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;

if (geneticist) {
  geneticist.toUpperCase(); // automatically assumes string
}

geneticist.toUpperCase(); // Can be undefined

let biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
  biologist; // Type: string
} else {
  biologist; // Type: false | string
}

let mathematician2: string;
mathematician2?.length;

let mathematician3: string | undefined;
mathematician3?.length;

// Type Aliases: typically given names in PascalCase
type RawData = boolean | number | string | null | undefined;
let rawData1: RawData;
let rawData2: RawData;

type Id = number | string;

type MaybeId = Id | undefined | null;
