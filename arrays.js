var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var word  = "candy";
function addElementToBeginningOfArray(array,element){
 var change = array.unshift(element);
 return change;
}
function destructivelyAddElementToBeginningOfArray(array,element){

}
function addElementToEndOfArray(){}
console.log(addElementToBeginningOfArray(chocolateBars,word));
