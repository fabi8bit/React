// the array we pass as an argument
// to  the setter function,
// always overwrites the old one.





import React, {useState} from 'react'

function UseStateWithArrays() {

    const [nums, setNums] = useState([1,2,3]);

    // If you want to add a value to the array, 
    // spread the existing array into the one you’re  
    // pushing into the state with the new value

    const addNums = () => {
    setNums([...nums, nums.length + 1]);
    }
    // If you  want to remove items, use the filter function
    //IMPORTANT: Whenever the filter method returns
    //false for an item,  that item
    //is left out of the resulting array.
    const removeNums = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length -1;
            })
        )
    }

    //never update the state directly or  use
    // impure functions like push() or pop().
    //push doesn't work with react. This solution doesn't work
    // use pure functions like map,
    // filter, reduce or spread operator  
    // that return a copy of an existing array
    // and therefore are a safe way
    // of updating the state.

    const buggyPushNumbers = () => {
        nums.push(nums.length +1);
        setNums(nums);
        console.log(nums);
    }

  return (
    <div>
        <button onClick={addNums}>
            Add Item
        </button>
        <button onClick={removeNums}>
            Remove Item
        </button>
        <button onClick={buggyPushNumbers}>
            Add Buggy Number
        </button>
        <ul>
            {nums.map(nums => <li key={nums}>{nums}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays