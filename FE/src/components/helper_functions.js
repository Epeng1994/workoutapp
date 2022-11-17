for(let i = 6;i>=0;i--){
    const dateCopy = new Date(today.getTime());
    dateCopy.setDate(dateCopy.getDate() - i);
    let check = dateCopy.toISOString().split('T')[0]
    calendarWeek.has(check) ? dataToMap.push(true) : dataToMap.push(false)
}


let dateSet = []
for(let i=0;i<7;i++){
    const dateCopy = new Date(startDate.getTime());
    dateCopy.setDate(dateCopy.getDate() + i);
    dateSet.push(dateCopy.toISOString().split('T')[0])
}
//console.log(dateSet)
return dateSet;