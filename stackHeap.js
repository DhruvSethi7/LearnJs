// Primitive data types are always in stack memory, so whenever  we assign them we get a copy of them

let name="dhruv"

let name2=name
name2='hari'
console.log(name)
console.log(name2)
//Both values will be differnt 

// Non Primitive data types are always in heap memory, so whenever  we assign them we get a refernce  of them

let iplTeam={
    name:'RCB',
    trophyCount:0
}

let iplTeam2=iplTeam

iplTeam2.trophyCount=10

console.log(iplTeam);
console.log(iplTeam2);

//Beacuse refernce is assigned thats why the values are same