//Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!

const intArr = [1989,1990,2020,12,9,1,10,4];

function avgArray(arr) {
    var sum = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  
    
    console.log(avgArray(intArr));
    