//Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!
const intArr = [1989,1990,2020,12,9,1,10,4];
const sortedArray = bubbleSort(intArr)

function binarySearch(arr,search) {
    let start = 0;
    let end = arr.length -1;
    while (start <=end) {
        let mid = Math.floor((start+end) /2);
        if (arr[mid] === search) {
            return true;
        }
        else if (arr[mid]< search){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return false;
}

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

console.log(binarySearch(sortedArray,23)); 

