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
