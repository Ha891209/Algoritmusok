const intArr = [1989,1990,2020,12,9,1,10,4];

function getMinElementFromAnArray(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i];
            
        }
    }

    return min
  
}
console.log(getMinElementFromAnArray(intArr));