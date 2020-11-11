const intArr = [1989,1990,2020,12,9,1,10,4];

function evenElementsCount(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i += 1) {
        (arr[i] % 2) ? {} : count += 1;
    }
    return count;
}
console.log(evenElementsCount(intArr));