// NO RECURSION

const removeDupes = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i])
    }
  }
  return unique;
}

console.log(removeDupes([1, 4, 4, 3, 6, 5, 6, 8, 9, 9]))

// WITH RECURSION 

// const removeDupesStoreValues = () => {
//   const unique = []
//   let index = 0
//   return function removeDupes(arr) {
//     if (!unique.includes(arr[index])) {
//       unique.push(arr[index])
//       index++
//       return removeDupes(arr)
//     }
//     return unique
//   }
// }
// const removeDupes = removeDupesStoreValues()



// console.log(removeDupes([1, 2, 3, 4, 6, 1, 3, 3]))