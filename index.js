//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

//Programmatically subtract the value of the first element in the array from the value in the last element of the array 

let difference = (function(ages){
  return ages[ages.length - 1] - ages[0];
    }(ages));
  console.log(difference);

  //let difference = ages[ages.length - 1] - ages[0];
  // console.log(difference);


//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(7);

let newDifference = (function(ages){
  return ages[ages.length - 1] - ages[0];
    }(ages));

console.log(newDifference);
     
//Use a loop to iterate through the array and calculate the average age. 

//completed with for of loop
var sum = 0;
  for(i of ages){
        sum += i;
      }
    
  average = sum/ ages.length;
    console.log(average, 'age average');

//-------------------------------------------------------------------------

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
  console.log(names);

// Use a loop to iterate through the array and calculate the average number of letters per name.
var totalLetters = 0;
for(i = 0; i < names.length; i++){
    totalLetters += names[i].length;
    console.log(i,"inside forloop, total letters:",totalLetters);
  }

  average = totalLetters/ names.length;
  console.log(average, 'total letters average');


// for ( var i of names){
//   console.log(names.join(' '))
// }

//How do you access the last element of any array?

let lastElement = names[names.length -1];

console.log(lastElement);


//How do you access the first element of any array?

console.log(names[0]);

//-------------------------------------------------------------------------

//Create a new array called nameLengths. loop to iterate over names array
// add the length of each name to the nameLengths array.


var nameLengths = names.map(function(element){
  for (i = 0; i < element.length; i++){
    return element.length;
  }
});
console.log(nameLengths,"name lengths array")
  
// use loop to iterate over the nameLengths array
// and calculate the sum of all the elements in the array. 

var sumName = 0;
  for(i =0; i < nameLengths.length; i++){
   sumName += nameLengths[i];
  }
  console.log(sumName);
;


//function with two parameters, word and n, as arguments 
//returns the word concatenated to itself n number of times. 
function wordRepeater(word,n) {
  return word.repeat(n);
}
console.log(wordRepeater('Hello',3));

// function/ takes two parameters, firstName and lastName, and returns a full name.
//The full name = separated by a space.

function FullName(firstName,lastName){
  console.log (firstName + " " + lastName);
}
FullName('Alex',"Goode")

//Write a function that takes an array of numbers and 
// returns true if the sum of all the numbers in the array is greater than 100.

var Arr1 = [31, 9, 20,100];

function greaterThanHundred(array){
console.log("greater than 100",array);
var  arrSum = 0;

for(var i = 0; i < array.length; i++ ){

  arrSum += array[i];
  }
  if(arrSum > 100){
    console.log(arrSum,true)
  }else{
    (arrSum < 100)
    console.log(arrSum,false);
  }
}
greaterThanHundred(Arr1);
// step 1 write a function
// step 2 takes array
// step 3 return if sum is greater than 100
// call function


//Write a function that takes an array of numbers and returns the average of all the elements in the array.
 var receiver = [1, 92, 40, 66, 22, 8, 48, 34];
 var receiverSum = 0;

for (i = 0; i < receiver.length; i++){
receiverSum += receiver[i];
}

receiverAver = receiverSum/ receiver.length;
console.log(receiverAver);


// find if average of the elements in the first array is greater
// than the average of the elements in the second array
// return true
bb = [ 22, 21, 48, 34,10000];
aa = [2, 89, 40, 44, 120, 8, 48, 16];

function isArrALarger (arr1,arr2){
  let array1sum= 0;
  for(i of arr1){
  array1sum += arr1[i];
  }
    let array2sum = 0;
    for(i of arr2){
    array2sum += arr2[i];
    }
  
  var arr1avg = array1sum/ arr1.length;
  var arr2avg = array2sum/ arr2.length;

if(arr1 > arr2){
  return true;
    }
  }
  console.log(isArrALarger(aa,bb));

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot xoutside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside,moneyInPocket){
  if(isHotOutside == true && moneyInPocket > 10.50){
    return true;
  }
} 
console.log(willBuyDrink(true, 11));


//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
//My function determines if a product is on sale and takes an additional 30 % off the already reduced price.
// Products that end with .99 are on sale. Products that are an integer will be full price. Sales tax is add to both on sale and full price items.




isOnSale = productPrice =>{
  if(productPrice % 1 === 0){
    salesTax = productPrice * 0.06;
    newSalePrice= salesTax + productPrice;
    console.log(newSalePrice);
    
  } else {
    thirtyOff = productPrice * .7
    salesTax = productPrice * 0.06;
    newPrice = salesTax + thirtyOff;
    newPrice= newPrice.toFixed(2);
    console.log(newPrice);
    }
  }
    isOnSale (8.99);