let marks = [97,82,75,64,36];
console.log(marks);
console.log(marks.length);

let cartoons = ["Tom and Jerry", "Ninja Hatori","Doremon"];
console.log(cartoons);

for(let i=0;i<cartoons.length;i++){
    console.log(cartoons[i]);
}
// for of

for(let cartoon of cartoons){
    console.log(cartoon);
}

let cities = ["delhi","pune","mumbai","hyderabad","gurgaon"];
// toUpperCase()
for(let city of cities){
    console.log(city.toUpperCase());
}

// for a given marks with marks of student -> [85, 97,44,37,76,60]
//find the average marks of the entire class
let Marks1 = [85,97,44,37,76,60];

let sum = 0;

for(let mark of Marks1){
    sum+=mark
}
console.log(sum)

let avg = sum/Marks1.length;
console.log(`Average makrs of the class = `+avg);

// for a give array with prices of 5 items->[250,645,300,900,50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer

let items = [250,645,300,900,50];
let idx = 0;
// for(let val of items){
//     console.log(`value at index ${idx} = ${val}`);
//     let offer = val / 10;
//     items[idx] = items[idx] - offer;
//     console.log(`value after offer = ${items[idx]}`);
//     idx++;

// }

for(let i=0;i<items.length;i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}

// array Methods
//Push
let foodItems = ["potato", "apple", "litchi","tomato"];

foodItems.push("chips","Paneer");
console.log(foodItems);


//pop

//foodItems.pop();
console.log(foodItems);

let deletedvalue = foodItems.pop();
console.log(deletedvalue);

// concate()

let marvel_heros = ["thor","spiderman","ironman"];
let dc_heroes = ["superman", "batman"];

let heros = marvel_heros.concat(dc_heroes);
console.log(heros);

marvel_heros.unshift("antman");// add item at the start of an array
console.log(marvel_heros);

let val = marvel_heros.shift();// it will delete the value at the start of an array
console.log(val);

// slice - retuens the piece of array

let vegetables = ["Potato", "Garlic","Ladyfinger","Onion"];
console.log(vegetables);
console.log(vegetables.slice(1,3));
// (1,1)-> only one
//(1,2) -> one 1 two is excluded
// (1) -> from 1 to end of an array

// splice - change original array(add, remove, replace)

let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
// (2,2,101,102)
arr.splice(3,1,101)

let companies = ["Bloomberg","Microsoft","Uber", "Google","IBM","Netflix"];
//companies.shift();
console.log();
companies.splice(2,1,"Ola");
// add amazone at ent
companies.push("Amazon");
