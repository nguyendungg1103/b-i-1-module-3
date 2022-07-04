const  mediumScore = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

]
let sumMale = 0;
let sumFemale = 0;
let countMale = 0;
let countFemale = 0;
mediumScore.forEach(((value, index) => {
    if(value.gender==="male"){
        sumMale+= value.poin
        countMale++
    }else{
        sumFemale += value.poin
        countFemale++
    }
}))
let agvMale = sumMale/countMale
let agvFemale = sumFemale/countFemale
console.log(agvFemale)
console.log(agvMale);

