
let array = [0, 1, 2, 3, 4, 5]
let i = 0

for (let key = 0; key < array.length; key++) {
    // const element = array[key];
   
    setTimeout(()=>{
        console.log("ejecución setime out", i++)
    },1000)
    
    new Promise fetch(`https://picsum.photos/id/${key}/300/300`).then(res => console.log("ejecución fetch", i++))

    
}

console.log("ejecución log on global", i++)
