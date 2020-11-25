const intArr = [1989,2020,9,1,10];
const intArr2 = [3,7,23,235,2]

function union(arr1, arr2) {
    
    const union = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (union.indexOf(arr1[i]) === -1) {
            union.push(arr1[i]);
        }
        if (union.indexOf(arr2[i]) === -1) {
            union.push(arr2[i]);
        }
    }
    return union;
}

function section(arr1, arr2) {
    const section = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr1.indexOf(arr2[i]) !== -1) {
            section.push(arr2[i]);
        }
    }
    return section
}

function difference(arr1, arr2) {
    const defference = [];
    for (let i = 0; i < arr1.length; i += 1) {
        if (arr2.indexOf(arr1[i]) === -1) {
            defference.push(arr1[i]);
        }
    }
    return defference;
}

function descartes(arr1, arr2) {
    const descartes = [];
   
    for (let i = 0; i < arr1.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            descartes.push(arr1[i] * arr2[j]);
        }
    }
    return descartes;
}
            console.log(union(intArr, intArr2));
            console.log(section(intArr, intArr2));
            console.log(difference(intArr, intArr2));
            console.log(descartes(intArr, intArr2));