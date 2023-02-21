
// 1 ---------
const getCommonElements = (firstArray, secondArray) => {

    let newArray = []


    firstArray.forEach((item) =>  {
        if (secondArray.includes(item)) {
            newArray.push(item)
            
        }

    });
    return newArray
}

 console.log(getCommonElements([1, 2, 3], [2, 4]));
 console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
 console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
 console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) );
 console.log(getCommonElements([1, 2, 3], [10, 20, 30]));



//  2 

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map((planets) => planets.length);
console.log('object :>> ', planetsLengths);





// 3

const workers = [
    {name: "A",salary:5000},
    {name: "B",salary:3000},
    {name: "C",salary:2000},
    {name: "E",salary:6000},
    {name: "F",salary:10000,grade: "top worker"},
    {name: "G",salary:7000},
 
   ];
   
   const MIN_SALARY = 5000;
   const TOP_WORKER = "F"
 
   
   const highSalaryFilter = workers.filter(({salary}) => salary >= MIN_SALARY);
    console.log(' highSalaryFilter:>> ', highSalaryFilter);  
    
    const findTopWorker = workers.find(({name}) => name === TOP_WORKER);
    console.log('findTopWorker :>> ', findTopWorker);