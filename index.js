
function writeCards(arr, str) {
    return arr.map(x=> `Thank you, ${x}, for the wonderful ${str} gift!`);
}

function countDown(n) {
    var i = n;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}