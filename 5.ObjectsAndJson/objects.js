/*jshint esversion: 6 */
let person = {
    firstName: "Pesho",
    age: 18,
    city: "Sofia"
};

console.log(person);

if (person.firstName) {
    console.log(`the person has a first name`);
}

console.log(person.hasOwnProperty("firstName"));
let keys = Object.keys(person);
let values = Object.values(person);
console.log(keys);
console.log(values);

console.log(JSON.stringify(person));

//map - it has come in js before 2-3 years
let human = new Map();
human.set("name", "Nedqlko");
human.set("age", 30);
human.set("city", "New York");
console.log(human.get("name"));
// human.delete("name");
// console.log(human.get("name"));

// let city1 = {
//     name: "Sofia",
//     population: 5000,
//     size: 2
// };
// let city2 = {
//     population: 1500,
//     size: 4
// };
// let city3 = {
//     population: 3000,
//     size: 10
// };
// let city4 = {
//     population: 2000,
//     size: 10
// };

// let cities = [city1, city2, city3];

// let sortedCitiesAsc = cities.sort((a, b) => {
//     return a.population - b.population || a.size - a.size;
//     //if equals returns 0 in population (it is false ) and will compare by size;
// });

// sortedCitiesAsc.forEach(a => console.log(a.population));

// let country1 = {
//     name: "Bulgaria",
//     city1,
//     city2
// };

// let country2 = {
//     name: "Greece",
//     city3,
//     city4
// };

// let sorted = [country1, country2]
//     .map((country) => {
//         let totalPopulation = Object.keys(country)
//             .map((key) => {
//                 return country[key].population;
//             })
//             .reduce((acc, cur) => {
//                 return acc + cur;
//             }, 0);
//         return {
//             country,
//             totalPopulation
//         };
//     })
//     .sort((a, b) => {
//         return a.totalPopulation - b.totalPopulation;
//     })
//     .map((countryObj) => {

//         //returns copy of our object
//         return JSON.parse(JSON.stringify(countryObj.country));
//     });

// sorted.forEach((country) => console.log(country.name));

// //Cappy Juice
// function juice(input) {
//     let quantities = {};
//     let bottles = {};

//     for (let line of input) {
//         let tokens = line.split(" => ");

//         let fruit = tokens[0];
//         let quantity = +tokens[1];

//         if (!quantities.hasOwnProperty(fruit)) {
//             quantities[fruit] = 0;
//         }
//         quantities[fruit] += quantity;

//         if (quantities[fruit] >= 1000) {
//             bottles[fruit] = Math.floor(quantities[fruit] / 1000);
//             // it can be done wirh parseInt;
//         }
//     }

//     for (let key of Object.keys(bottles)) {
//         console.log(`${key} => ${bottles[key]}`);
//     }
// }

// juice(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549'
// ]);

// System Components
function system(input) {
    let systems = new Map();
    for (let i = 0; i < input.length; i++) {
        //destruktorirane
        let [system, component, subcomponent] = input[i].split(" | ");

        if (!systems.has(system)) {
            systems.set(system, new Map());
        }

        if (!systems.get(system).has(component)) {
            systems.get(system).set(component, []);
        }

        systems.get(system).get(component).push(subcomponent);
    }

    

}

system(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);