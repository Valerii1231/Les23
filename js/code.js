//  1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let i = 0;
let rezult = 0;
function sumArr(i) {
    rezult += arr[i];
    if (i === arr.length - 1) {
        return rezult;
    } else {
        return sumArr(i += i);
    }
}
console.log(sumArr(i)); 



i = 0;
rezult = 0;
function sumArr(i) {
    rezult += arr[i];
    return (i === arr.length - 1) ?  rezult :  sumArr(i = i + 1);
    }
console.log(sumArr(i)); 




// 2

let array = [1, 2, [3, 4, [5]]];
let item;

let n = 0;
function deepCount(array) {
    array.forEach(function (item) {
        n = n + 1;
        if (Array.isArray(item)) {
            deepCount(item);
        } else return n;
    });
}
deepCount(array);
console.log(n);



n = 0;
function deepCount(array) {
    array.forEach(function (item) {
        n = n + 1;
     return (Array.isArray(item)) ? deepCount(item): n;
    });
}
deepCount(array);
console.log(n);



//  3

let employees = {
    development: {
        backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
        frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
    },
    sales: {
         marketing: {
            internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
            promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
        },
        sellers: [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
    },
    designer: [{name: 'Kate', salary: 1800}]
}

function sumSel() {
    let sum = 0;
    return function sumSallary(obj) {
        for (let key in obj) {
            if (Array.isArray(obj[key])) {
                obj[key].forEach(employee => sum += employee.salary);
            } else {
                sumSallary(obj[key]);
            }
        }
        return sum;
    }
}
const sSalary = sumSel(0);
console.log(sSalary(employees));




//  4

let arr1 = [2, 15, 7, 3];
let arr2 = [9, 3, 17, 12, 4, 8];
let arr3 = [6, 11, 16, 15, 11];
let arrMax = [];
arrMax[0] = Math.max(...arr1);
arrMax[1] = Math.max(...arr2);
arrMax[2] = Math.max(...arr3);
let max = Math.max(...arrMax);
console.log(max);
