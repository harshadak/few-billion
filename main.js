// How much was the reward after 30 days?

function makeMoney() {
    var money = 0.01;

    for (var i = 0; i < 30; i++) {
        money = money * 2;
    }
    return money;
}

makeMoney();
