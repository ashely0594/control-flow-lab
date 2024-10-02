
// plants double in number every week 
//predict plant growth after a specific number of weeks 
// control flow. pruned to stop them from exceeding the capacity of the garden 
// monitored if they are growing at an acceptable rate plant count is between 50% and 80% 
// planted if there is room to plant more plants 
// plant count is less than 50% of the maximum capacity of the garden 
// week 1 week 2 week 3 

const PI= 3.1415; //pie radius
let r = 5;   //radius of plants
let A = PI * ((r) **2)  //Area formula
const MiniSpaceArea = 0.8 
let WeekPlants1 = 20; 


//Part 1 Growing Pains 

console.log(A) //total area 78.5375
let maximumCapacity = Math.round(A/ MiniSpaceArea)
console.log(maximumCapacity) // maximum capacity is 98

let weekPlants2 = WeekPlants1 * 2  //40
let weekPlants3 = weekPlants2 * 2 //80
console.log(weekPlants3) 

let Pruned = .80 * maximumCapacity //78.4
console.log(Pruned)

let Monitored = .50 * maximumCapacity //49
console.log(Monitored)

//Conditionals 


if (weekPlants3 > Pruned) {
    console.log('Prune the garden');
} 
else if ( Monitored < weekPlants2  && weekPlants2 < Pruned) {
    console.log('Garden is monitored');
} 
else if (weekPlants2 < Monitored) {
    console.log ('Plant more');
}



//Part 2:Thinking Bigger 

let str = 100;
let weekPlants10 = str * 2 **10 //102,400 of plants after week 10
console.log(weekPlants10)

let currentSpace = weekPlants10 * MiniSpaceArea //curent space 81920
    console.log(currentSpace) 


let additionalSpace = weekPlants10 * MiniSpaceArea - A  //81841
console.log(additionalSpace)

 let area = weekPlants10 * MiniSpaceArea //additional space 81,920 area
 console.log(area)




 //calculate the radius

 console.log(Math.sqrt(currentSpace/PI)) //radius 161



//part 3




  

 















