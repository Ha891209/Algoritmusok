//Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!

const intArr = [1989,1990,2020,12,9,1,10,4];
const searchValue = 23;

function counter(arr, search) {
    let counter = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === search) {
            counter += 1;
        }
    }
    return counter;
}

console.log(counter(intArr, 23));