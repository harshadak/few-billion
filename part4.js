// In JavaScript, there is a value Infinity, how many days until the servant has infinite money?

var reward = 0.01;
var count = 1;
while (reward > 0) {
    reward = reward * 2;
    count++;
    if (reward >= Infinity) {
        break;
    }
}
console.log(count);
