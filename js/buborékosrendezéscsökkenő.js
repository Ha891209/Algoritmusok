//Rendezd a javított buborékos rendezés algoritmus (nézz utána mi az, ha nem ismered) segítségével egy tetszőleges elemszámú, beágyazott tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe! A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe. Írasd ki a rendezett tömböt!

const intArr = [1,1989,12,false, 2020,true, 4,9,1990,"hello"];

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

function filterByNumbers(arr) {
    const numbers = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (typeof arr[i] === 'number') {
        numbers.push(arr[i]);
      }
    }
    return numbers;
  }
  
  function filterByNotNumbers(arr) {
    const notNumbers = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (typeof arr[i] !== 'number') {
        notNumbers.push(arr[i]);
      }
    }
    return notNumbers;
  }


console.log(bubbleSort(intArr)); 
console.log(filterByNotNumbers(intArr));
console.log(filterByNumbers(intArr))