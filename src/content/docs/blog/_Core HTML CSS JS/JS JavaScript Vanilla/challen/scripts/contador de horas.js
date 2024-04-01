
const horas = [2,46, 2,21, 1,46, 0,55, 1,55, 2,12, 0,30, 2,30, 0,35, 1,21, 2,15, 4,45, 2,21, 1,21, 0,21, 1,15, 0,30, 5,21, 1,16, 2,31, 0,20, 2,45, 2,32, 0,30, 4,55, 3,59, 2,33, 0,56, 2,31, 4,32, 1,32, 2,32, 5,32, 1,32, 0,45, 1,45, 4,30, 2,30, 3,35, 1,55, 3,35, 2,35, 4,12, 2,15, 1,15, 2,35]


let totalH = 0;
let totalM = 0;

for (let index = 0; index < horas.length; index++) {
    const element = horas[index];
    if(index%2==0){
        // console.log(element, index);
        totalH +=element
    }else{
        totalM +=element
    }
}



addTimes = function(timeMap) {
    // First simply adding all of it together, total hours and total minutes
    for (var x in timeMap) {
        totalH += parseInt(timeMap[x].hour, 10);
        totalM += parseInt(timeMap[x].minutes, 10);
    }
    // If the minutes exceed 60
    if (totalM >= 60) {
        // Divide minutes by 60 and add result to hours
        totalH += Math.floor(totalM / 60);
        // Add remainder of totalM / 60 to minutes
        totalM = totalM % 60;
    }
    return totalH + " hr" + totalM + " Min ";
}

console.log(addTimes());