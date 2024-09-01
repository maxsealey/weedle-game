// "Helper functions

// randomly generate a number from 1 - length of the pokedex, return it
// adds choice to the queue of numbers to not pick for given amount of time
// optional parameter for queue length, default set to 15. 
// DO NOT ENTER queueLen less than 15 

export default function generateChoice(dexLength, choiceQueue, queueLen = 15) {
    let valid = false, choice
    while (!valid) {
        choice = Math.floor(Math.random() * (dexLength + 1)) // generate random
        if (!choiceQueue.includes(choice)) {
            valid = true
            if (choiceQueue.length < queueLen) {
                choiceQueue.push(choice)
            } else if (choiceQueue.length >= queueLen) {
                choiceQueue.shift()
                choiceQueue.push(choice) // remove first and add new num to the end of queue
            }
        } else {
            continue // keep trying until its a number not already in the array
        }
    }
    return choice
}

// generateChoice test
// const testArray = [29, 49, 341, 740, 200, 67, 794, 800, 95, 53, 96, 109, 700, 504, 12]
// console.log(generateChoice(905,testArray))
// console.log(testArray)

// gets the generation number from the pokemon national dex id
export const getGeneration = (dexNum) => {
    if (dexNum <= 151) return 1;
    if (dexNum <= 251) return 2;
    if (dexNum <= 386) return 3;
    if (dexNum <= 493) return 4;
    if (dexNum <= 649) return 5;
    if (dexNum <= 721) return 6;
    if (dexNum <= 809) return 7;
    if (dexNum <= 905) return 8;
    if (dexNum <= 1025) return 9;
    return 0;
  };
