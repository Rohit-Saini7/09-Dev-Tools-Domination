const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

const p = document.querySelector("p");

function makeGreen() {
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// * Regular
console.log("This is regular log");

// * Interpolated
console.log("this is %s log", "Interpolated");

// * Styled
console.log(
  "%c Its a styled log.",
  "font-size:15px; background: red; text-shadow:2px 2px 0 blue"
);

// * warning!
console.warn("this is warning log");

// * Error :|
console.error("This is an error log");

// * Info
console.info("This is Info log");

// * Testing
console.assert(p.classList.contains("test"), "This is success testing log");
console.assert(p.classList.contains("ouch"), "This is failed testing log");

// * clearing
// console.clear();

// * Viewing DOM Elements
console.log(p);
// console.dir(p);

// * Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// * counting
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");

// * timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// * Table

console.table(dogs);
