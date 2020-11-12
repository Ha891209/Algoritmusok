const intArr = [1989,1990,2020,12,9,1,10,4];

function thirdbiggestElement(arr) {

    let biggest = arr[0];
    let thirdbiggest = arr[0];

    for (let i = 1; i < 3; i += 1) {
        if (arr[i] < biggest) {
            thirdbiggest = biggest;
            biggest = arr[i];
        } else {
            if (arr[i] < thirdbiggest) {
                thirdbiggest = arr[i];
            }
        }
    }
    return thirdbiggest;
}

console.log(thirdbiggestElement(intArr));
