// WITHOUT RECURSION

const compressor = (str) => {
  const regex = /(.)\1*/ig
  const arr = str.match(regex)
  let output = ''
  arr.forEach(function(element) {
    if (element.length > 1) {
      output = output.concat(element.length + element[0])
    } else {
      output = output.concat(element)
    }
  })
  return output
}

console.log(compressor('aaaabbccdeeefggg'))

// WITH RECURSION

const compressorStoreValues = () => {
  let output = ''
  return compressor = (str) => {
    if (str.length > 0) {
      const arr = str.match(/(.)\1*/ig)
      let index = arr.shift()
      output = output.concat(index.length + index[0])
      return compressor(arr.join(''))
    }
    return output.replace(/1/g, '')
  }
}

console.log(compressorStoreValues()('aaaabbcdeeeefff'))