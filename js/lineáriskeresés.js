//Írd ki (igen vagy nem), hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot, egyéb iterálható elemet nem tartalmaz) tartalmazza-e a 23-as számot! Használj lineáris keresést!/

const intArr = [1989,1990,2020,12,9,1,10,4];

function linearsearch(array , search){
   let n = array.length
   
    for(let i=0 ; i<n ; i++){
        if(search===array[i]){
         return console.log(true);
        }
    }
 return console.log(false);
}

console.log([intArr]);
linearsearch(intArr,4);
