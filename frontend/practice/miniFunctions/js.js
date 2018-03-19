var animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' }
];
/* FILTER
var dogs = animals.filter(animal => animal.species === 'dog');
*/

var func = function(animal) {
    return animal.name;
}
var dogs = animals.map(func);
console.log(dogs);

/**/

/* MAP
var names = animals.map(animal => animal.name + ' is a ' + animal.species);
console.log(names);*/

/* REDUCE
var orders = [
    { amount: 100 },
    { amount: 150 },
    { amount: 90 },
    { amount: 780 },
    { amount: 368 }
]

var total = orders.reduce((acc, curr) => acc + curr.amount, 0)
console.log(total);*/