chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array, element)
{
  array.unshift(element)
}
function addElementToEndOfArray(array, element)
{
  array.push(element)
} 
function destructivelyAddElementToEndOfArray(array, element)
{
  var newarray = [element]
  array = newarray
}
function destructivelyRemoveElementFromEndOfArray(array)
{
  var newarray = array.slice(-1)
  array = newarray
}
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  var newarray = array.slice(1)
  array = newarray
}
