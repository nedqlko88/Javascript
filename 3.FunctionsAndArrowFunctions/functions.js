function templateFormat(input) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>
<quiz>`);
    // console.log(input.length);
    let body = function () {
        for (let i = 0; i < input.length; i += 2) {
            console.log(`  <question>
        ${input[i]}
      </question>
      <answer>
        ${input[i + 1]}
      </answer>`);
        }
    }

    body();

    console.log(`</quiz>`);
}

// templateFormat(["Dry ice is a frozen form of which gas?",
// "Carbon Dioxide",
// "What is the brightest star in the night sky?",
// "Sirius"]
// );

function cooking(input) {
    let number = +input[0];

    let chop = () => number / 2;
    // console.log(typeof chop());
    // console.log(typeof chop);
    let dice = () => Math.sqrt(number);
    let spice = () => number + 1;
    let bake = () => number * 3;
    let fillet = () => number * 0.8;

    for (let i = 1; i < input.length; i++) {
        switch (input[i]) {
            case "chop":
                number = chop();
                break;
            case 'dice':
                number = dice();
                break;
            case 'spice':
                number = spice();
                break;
            case 'bake':
                number = bake();
                break;
            case 'fillet':
                number = fillet();
                break;
        }
        console.log(number);
    }
}

cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);


function modifyAverage(num) {
    // console.log(typeof num);
    let numberAsString = num.toString();
    // console.log(typeof numberAsString);
    let average = sumDigits(numberAsString) / numberAsString.length;

    function sumDigits(num) {
        let sumOfAll = 0;
        for (let digit of num) {
            sumOfAll += +digit;
        }
        return sumOfAll;
    }
    
    while (average <= 5) {
        numberAsString += "9";
        average = sumDigits(numberAsString) / numberAsString.length;
    }

    console.log(numberAsString);

}

modifyAverage(101);