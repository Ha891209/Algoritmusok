//Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, csak egész számokat tartalmazó tömb tartalmazza-e a 23-as számot! Használj logaritmikus keresést! Nézz utána mi az, milyen feltételei vannak, és hogyan valósítható meg!

const intArr = [1989,1990,2020,12,9,1,10,4];

let numberToFind = 23;
let found = false;

function linearSearch(arr, toFind) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] == toFind) {
            found = true;
            break;
        }
    }
    return found;
}

console.log(linearSearch(intArr, numberToFind));