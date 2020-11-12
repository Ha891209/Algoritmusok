//Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!

const intArr = [1989,1990,2020,12,9,1,10,4];

function sameSearch(arr,cell){
    let db=0;
    for(let i=0; i<arr.length ;i += 1){
        
        if(arr[i]===cell){
            db +=1;
        }
    }
    return db


    
}

console.log(sameSearch(intArr, 23));