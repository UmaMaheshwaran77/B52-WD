let count = 10;

function countdown(callback) {
    if (count > 0) {
        setTimeout(function () {
            document.getElementById("countdown").innerHTML = count;
            count--;
            countdown(callback);
        }, 1000);
    } else {
        callback();
    }
}

countdown(function () {
    setTimeout(function () {
        document.getElementById("countdown").innerHTML = "Happy Independence Day";
    }, 1000);
});
