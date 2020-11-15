//Adott egy tetszőleges pozitív egész számokat tartalmazó tömb. Válogassuk szét külön egy even (páros), és odd (páratlan) nevezetű tömbbe a páros, és páratlan számokat! Írjuk ki a 2 tömböt!

const intArr = [1989,1990,2020,12,9,1,10,4];

function sortEven(arr) {
    const even = [];
    for (let i = 0; i < arr.length; i += 1) {
        if(arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
    }
    return even;
}
function sortOdd(arr) {
    const odd = [];
    for (let i = 0; i < arr.length; i += 1) {
        if(arr[i] % 2 !== 0) {
            odd.push(arr[i]);
        }
    }
    return odd;
}

console.log('Páros' + sortEven(intArr) + ' ; Páratlan: '  + sortOdd(intArr));