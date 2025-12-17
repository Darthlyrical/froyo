const list = prompt('Enter a list of comma-separated froyo flavors.(example: vanilla bean,coffee,strawberry):');
// const list = 'berry, apple, pineapple, kiwi, berry, cherry, orange, banana'
const arr = list.split(',');

const trackedFlavors = {};

for (let i = 0; i < arr.length; i++) {
    const listedFlavors = arr[i].trim().toUpperCase();
    if (trackedFlavors[listedFlavors] === undefined) {
        trackedFlavors[listedFlavors] = 1;
    } else {
        trackedFlavors[listedFlavors] += 1;
    }
}

// console.table(trackedFlavors);
console.log('Here is what was ordered', trackedFlavors) 
//didn't like how the console displayed the object because 
// the drop down arrow had to be pressed. 
// added a string to make it more user friendly.  

