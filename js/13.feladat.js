//Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. A tömb elemeit rendezzük növekvő sorrendbe. Ezután a felhasználótól kérjünk be egy számot (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg). A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, tehát a megfelelő indexű helyre kerüljön be a plusz elem.Írasd ki a rendezett tömböt!

const intArr = [1989,1990,2020,12,9,1,10,4];
const intArr2 = [20,985,3,45,65]

function bubbleSortAsc(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i += 1) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }

function custom13(arr) {
    const inputNumber = parseInt(prompt('Adj meg egy számot'), 55);
    arr.push(inputNumber);
    const sortedArray = bubbleSortAsc(arr);
    return sortedArray;
  }
  
  function getIndex(arr, value) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] > value) {
        return i;
      }
    }
  }
  
  function custom13v2(arr) {
    const sortedArray = bubbleSortAsc(arr);
    const inputNumber = parseInt(prompt('Adj meg egy számot'), 10);
    if (!Number.isNaN(inputNumber)) {
      const index = getIndex(sortedArray, inputNumber);
      sortedArray.splice(index, 0, inputNumber);
    }
    return sortedArray;
  }
  
  console.log(custom13(intArr));
  console.log(custom13v2(intArr));