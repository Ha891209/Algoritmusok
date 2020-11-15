//Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben. Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!

const intArr = [1989,1990,"szia",2020,12,9,1,10,4, "hello"];

function customSort(arr) {
  const numbers = [];
  const strings = [];
  const sortedArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i]);
    } else {
      strings.push(arr[i]);
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    sortedArray.push(numbers[i]);
    sortedArray.push(strings[i]);
  }
  return sortedArray;
}

const result = customSort(intArr);
console.log(result);

function getPrimitiveElementsByType(arr, type) {
    const typedArray = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (typeof arr[i] === type) {
        typedArray.push(arr[i]);
      }
    }
    return typedArray;
  }
  
  function mixArrays(arr1, arr2) {
    const mixedArray = [];
    for (let i = 0; i < arr1.length; i += 1) {
      mixedArray.push(arr1[i], arr2[i]);
    }
    return mixedArray;
  }
  
  const numbers = getPrimitiveElementsByType(intArr, 'number');
  const strings = getPrimitiveElementsByType(intArr, 'string');
  console.log(mixArrays(numbers, strings));