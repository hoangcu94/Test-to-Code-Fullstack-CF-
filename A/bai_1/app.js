let arr1 = [1, 2, "a"];
let arr2 = [1, 3, "b"];
let arr = [];
for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
        arr.push(arr1[i]);
    }
}
for (let i = 0; i < arr1.length; i++) {
    if (!arr1.includes(arr2[i])) {
        arr.push(arr2[i]);
    }
}
console.log(arr);

