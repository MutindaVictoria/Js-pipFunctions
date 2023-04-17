//Write a function that accepts an array of strings and console.logs each element
// using a for loop.
function fruits(arr){
    for
    (let i=0; i<arr.length;i++){
         console.log(arr[i]);
    
    }
    }
    let allfruits =['kiwi','mangoes','guavas','sweetberry','orange'];
    fruits(allfruits);
    







//Write a function that takes in a string and returns it when reversed
//let food = “eating”
//let food= "eating"
function results(food){

    let reverse=food.split("").reverse("").join("")
    return reverse;

    
}
let food="eating"
console.log (results(food))

//Given years between 2000 and 2023, 
//console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap ye
function isLeapYear(){
    for(let year = 2000; year <= 2023; year++){
        if ((year % 4 === 0 && year % 100 !== 0)|| year % 400 === 0){
            console.log(year + " is a leap year");
        }
        else{
            console.log(year + " is not a leap year");
        }
    }
}
isLeapYear();


//Given a range of numbers from 0 to 100, console”Fizz” 
//  if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, 
//and “FizzBuzz” if divisible by both 3 and 5.
function numbersRange(){
    for(let num = 0; num<=100;num++){
        if(num%3 ===0 && num%5 ===0){
            console.log("FizzBuzz");
        }
        else if(num%3 === 0){
            console.log("Fizz");
        }
        else if(num%5===0){
            console.log("Buzz");
        }
        else{console.log(num)};
    }
    }
    numbersRange()

    //Write a function that takes in an array of strings and returns an
// array with every element
//turned into a number

//let nums = ["10","24","45","56","67"]
function numbers(nums){
    return nums.map(Number)
   
   }
   let nums= ["10","24","45","56",""]
   console.log(numbers(nums))