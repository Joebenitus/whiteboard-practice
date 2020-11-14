//without recursion

// const toURL = (string) => {
//   const strAsArray = string.split(' ');
//   return strAsArray.join('%20')
// }

// console.log(toURL('hello my name is jeff'))

//with recursion

const toURL = (string, outputArr=[]) => {
  let arr = string.split(' ');
  if (arr.length === 1) {
    outputArr.push(arr[0])
    return outputArr.join('%20');
  } else {
    outputArr.push(arr.shift())
    return toURL(arr.join(' '), outputArr)
  }
}
console.log(toURL('hello how are you'))
