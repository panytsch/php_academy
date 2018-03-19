var listOfPeople = [{
        name: 'dima',
        age: 24,
        surname: 'ivchenko'
    },
    {
        name: 'kate',
        age: 23,
        surname: 'sparrow'
    },
    {
        name: 'roma',
        age: 24,
        surname: 'panasiuk'
    },
    {
        name: 'tania',
        age: 24,
        surname: 'panasiuk'
    },
    {
        name: 'serg',
        age: 24,
        surname: 'bazhanov'
    },
    {
        name: 'yulia',
        age: 26,
        surname: 'klim'
    },
    {
        name: 'maryna',
        age: 29,
        surname: 'vitushko'
    },
    {
        name: 'oksi',
        age: 32,
        surname: 'ryzhko'
    }
];



let table = document.createElement('table');
// let newList = listOfPeople.filter(man => man.age > 23).map(x => x.name);
// console.log(newList);
let head = '<tr class="fine"><td>Name</td><td>Age</td><td>Surname</td></tr>';
table.innerHTML = head;
let fun = function(x) {
    let tr = document.createElement('tr');
    for (let a in x) {
        let td = document.createElement('td');
        td.innerText = x[a];
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

listOfPeople.map(fun);

document.body.appendChild(table);

main.onkeyup = function(e) {
    let arr = listOfPeople.filter(function(x) {
        let temp = x.name.split(e.target.value.toLowerCase());
        if (temp.length - 1) {
            return true;
        }
        temp = x.age.toString().split(e.target.value.toLowerCase());
        if (temp.length - 1) {
            return true;
        }
        temp = x.surname.split(e.target.value.toLowerCase());
        return temp.length - 1;
    })
    table.innerHTML = head;
    arr.map(fun);
}