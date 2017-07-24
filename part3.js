// How about 1 billion?

var reward = 0.01;
var count = 1;
while (reward > 0) {
    reward = reward * 2;
    count++;
    if (reward >= 1000000000) {
        break;
    }
}
console.log(count);



// Alternate solution

var reward = 0.01;
var count = 1;
while (reward <= 1000000000) {
    reward = reward * 2;
    count++;
}
console.log(count);
