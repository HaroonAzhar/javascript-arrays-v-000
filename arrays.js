var chocolateBars=["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(array,element)
{
    var result=[element,...array];
    return result;
}
function addElementToEndOfArray(array,element)
{
  var result=[...array,element];
  return result;
}
function destructivelyAddElementToBeginningOfArray(array,element)
{
  array.unshift(element);
  return  array;
}

function destructivelyAddElementToEndOfArray(array,element)
{
  array.push(element);
  return array;
}
function accessElementInArray(array,index)
{
    return array[index];
}
function removeElementFromEndOfArray(array)
{
  var result=array.slice(0,array.length-1);
  return result;
}
function removeElementFromBeginningOfArray(array)
{
  var result=array.slice(1);
  return result;
}
function destructivelyRemoveElementFromEndOfArray(array)
{
    array.pop();
    return array;
}
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  array.shift();
  return array;
}
