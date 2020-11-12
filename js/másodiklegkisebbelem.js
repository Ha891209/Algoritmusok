//Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét!

const intArr = [1989,1990,2020,12,9,1,10,4];

function secondSmallestElement(arr) {

    let smallest = arr[0];
    let secondSmallest = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else {
            if (arr[i] < secondSmallest) {
                secondSmallest = arr[i];
            }
        }
    }
    return secondSmallest;
}

console.log(secondSmallestElement(intArr));












