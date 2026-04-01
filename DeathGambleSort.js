//Normal bubble sort alg but after every sorting step it generates a possible death number that could shuffle your whole array (bogo sort)
//Functionality time: O(n^2 * luck)


function bubbleSortPass(arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

function bogoShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function isSorted(arr){
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] > arr[i+1]){
      return false;
    }
  }
  return true;
}

function deathGambleSort(arr){
  const deathNumber = Math.floor(Math.random() * 10);

  while (!isSorted(arr)){
    
    bubbleSortPass(arr);

    let rgNumber = Math.floor(Math.random() * 10);

    if (rgNumber === deathNumber){
      console.log("Unlucky you! You landed on the wrong number. the whole array was shuffled... Good luck next time 💀");

      bogoShuffle(arr);
      console.log("");
    }
  }

  console.log(`Final Array: ${arr}`);
}




let MainArray = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 1000)
);

console.log(`Starting array: ${MainArray}`);
console.log("")
console.log("")
deathGambleSort(MainArray)
