function solve(a, b) {
    let area = a * b;
    let perimeter = 2 * (a + b);
    console.log(area);
    console.log(perimeter);
}

solve(2, 2);


function printName(name) {
    console.log(`Hi ${name}, how are you?`);
}

printName("Ned");


function distanceOverTime([V1, V2, T]) {
    let timeInHours = T / 3600;
    let distance1 = timeInHours * V1;
    let distance2 = timeInHours * V2;
    let diffDistanceInMeters = Math.abs(distance1 - distance2) * 1000;
    console.log(diffDistanceInMeters);
}

distanceOverTime([5, -5, 40]);


function distanceIn3D([x1, y1, z1, x2, y2, z2]) {
    let horizontDistance = Math.sqrt(Math.pow(Math.abs(x1 - x2)) + Math.pow(Math.abs(y1 - y2)));
    let verticalDistance = Math.abs(z1 - z2);
    let realDistance = Math.sqrt(Math.pow(horizontDistance) + Math.pow(verticalDistance));
    console.log(realDistance);
}

distanceIn3D([3.5, 0, 1, 0, 2, -1]);


function gradsToDegrees(grads) {
    let degrees = grads * 0.9;

    while (degrees < 0 || degrees >= 360) {
        if (degrees < 0) {
            degrees += 360;
        } else if (degrees >= 360) {
            degrees -= 360;
        }
    }
    console.log(degrees);
}

gradsToDegrees(1500);


function rounding(input) {
    let number = +input[0];
    let precision = +input[1];

    if (precision > 15) {
        precision = 15;
    }

    console.log(+number.toFixed(precision)); 
// kogato parsnem kum number - izrqzva nenujnite nuli
    // console.log(number.toFixed(2));  returns string , rounds to second number after decimal point
}

rounding([3.14363463463463464, 2]);
rounding([3.5, 6]);


function compoundInterest([sum, interestRate, period, timeSpan]) {
    let result = sum * (Math.pow((1 + (interestRate / period)), (period * timeSpan))); 
    console.log(+result.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);


function nowPlaying([track, artist, length]) {
    console.log(`Now Playing: ${artist} - ${track} [${length}]`);
}

nowPlaying(['Number One', 'Nelly', '4:09']);


function binaryToDecimal(input) {
    let sum = 0;
    let coursor = 0;
    for (let i = input.length - 1; i >= 0; i--) {
        if (+input[i] === 1) {
            sum += Math.pow(2, coursor);
        }
        coursor++;
    }
    console.log(sum);
}

binaryToDecimal('11110000');


function assignProperties(input) {
    let object = {};

    for (let i = 0; i < input.length; i += 2) {
        object[input[i]] = input[i + 1];
    }
    console.log(object);
}

assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);


function lastMonth([day, month, year]) {
    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}

lastMonth([13, 12, 2004]);
