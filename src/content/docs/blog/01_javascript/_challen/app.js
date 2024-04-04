
// reverse int
// *
// type* /
const reverseInt = (int) => {
    let str = int.toString()
    let arr = []
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        arr.push(element)
    }
    return int(arr.reverse().join(""))
}

reverseInt(233243)