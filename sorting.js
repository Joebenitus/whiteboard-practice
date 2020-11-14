const joeSort = (arr) => {
  let output = []
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    if (arr.includes(i)) {
      output.push(i)
    }
  }
  return output;
}

console.log(joeSort([2,3,7,4,6,9,0,1,6,2,3,5,1,6,4]))