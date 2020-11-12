//Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!

const intArr = [1989,1990,2020,12,9,1,10,4];

function osszeg(arr){
    let osszeg=0;
    for(let i=0; i<arr.length; i += 1){
        osszeg = osszeg + arr[i];
    }
    return osszeg
}
console.log(osszeg(intArr));
