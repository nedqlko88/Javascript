function biggestNumber([n1, n2, n3]) {
    console.log(Math.max(n1, n2, n3));
}

biggestNumber([-10, -20, -30]);


function pointInRectangle([x, y, xMin, xMax, yMin, yMax]) {
    if (x > xMin && x < xMax && y > yMin && y < yMax) {
        console.log('inside');
    } else if (x < xMin || x > xMax || y < yMin || y > yMax) {
        console.log('outside');
    } else {
        console.log('border');
    }
}

pointInRectangle([8, -1, 2, 12, -3, 3]);
pointInRectangle([8, -3, 2, 12, -3, 3]);
pointInRectangle([12.5, -1, 2, 12, -3, 3]);


function drawTriangleOfDollars(n) {
   for (let i = 1; i <= n; i++) {
        console.log('$'.repeat(i));
   } 
}

drawTriangleOfDollars(3);

let array = [1,2,3,4,5,6];
console.log(typeof array);
let object = {
    'name':"Nedqlko",
    'age':24
}
console.log(typeof object);
array.push(545);
console.log(array);
