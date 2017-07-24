// How many days would it take the servant to make $10,000?

var reward = 0.01;
var count = 1;
while (reward > 0) {
    reward = reward * 2;
    count++;
    if (reward >= 10000) {
        break;
    }
}
console.log(count);


// Alternate solution

var reward = 0.01;
var count = 1;
while (reward <= 10000) {
    reward = reward * 2;
    count++;
}
console.log(count);
