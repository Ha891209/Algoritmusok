//Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!

const intArr = [1989,1990,2020,12,9,1,10,4];

function BiggestElement(arr) {
    let biggest = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }

    return biggest
  
}
console.log(BiggestElement(intArr));