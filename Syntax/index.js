function solve(a, b) {
    let area = a * b;
    let perimeter = 2 * (a + b);
    console.log(area);
    console.log(perimeter);    
}

solve(2,2);

function printName(name) {
    console.log(`Hi ${name}, how are you?`);
}

printName("Ned");

function distanceOverTime([V1,V2,T]) {
    let timeInHours = T / 3600;
    let distance1 = timeInHours * V1;
    let distance2 = timeInHours * V2;
    let diffDistanceInMeters = Math.abs(distance1 - distance2) * 1000;
    console.log(diffDistanceInMeters);
}

distanceOverTime([5, -5, 40]);

function distanceIn3D([x1, y1, z1, x2, y2, z2]) {
   let horizontDistance = Math.sqrt(Math.abs(x1 - x2)**2 + Math.abs(y1 - y2)**2);
   let verticalDistance = Math.abs(z1 - z2);
   let realDistance = Math.sqrt(horizontDistance**2 + verticalDistance**2);

   console.log(realDistance);
}

distanceIn3D([1, 1, 0, 5, 4, 0]);



