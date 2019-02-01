let numbers = [10,20,30,40,50,60,70,80,90,100];

console.log(JSON.stringify(numbers));
console.log(numbers);
console.log(numbers.join(", "));
// numbers.forEach((num, index) => console.log(`element with index ${index} has value ${num}`));
let indices = [];
let values = [];

for (let i in numbers) {
    indices.push(i);
}
console.log(indices.join(" "));

for(let num of numbers) {
    values.push(num);
}
console.log(values.join(" "));

let coppiedArray = numbers.slice(0);
// let coppiedArray1 = [];
let coppiedArray1 = [].concat(numbers);
console.log(coppiedArray.join(", "));
console.log(coppiedArray1.join(", "));

let cutArr = numbers.splice(3,4,"newElementInInputArray");
console.log(cutArr.join(", "));
console.log(numbers.join(", "));
// splice - cut the input array, naka new arrray with cut piece 


function printNthElement(input) {
    let nElement = +input.pop();
    for (let i = 0; i < input.length; i += nElement) {
        console.log(input[i]);
    }
}

printNthElement(['5', '20', '31', '4', '20', '2']);


function addRemoveArr(input) {
    let arr = [];
    let initialNum = 1;
    
    for (let command of input) {
        if (command === 'add') {
            arr.push(initialNum);
        } else if (command === 'remove') {
            arr.pop();
        }
        initialNum++;
    }
    
    if (arr.length === 0) {
        console.log('Empty');
    } else {
        for (const num of arr) {
            console.log(num);
        }
    }

}

addRemoveArr(['add', 'add', 'remove', 'add', 'add']);


function rotateArray(input) {
    let rotateArray = +input.pop();

    for (let i = 0; i < rotateArray % input.length; i++) {
        let lastElement = input.pop();
        input.unshift(lastElement);
    }
    console.log(input.join(" "));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);


