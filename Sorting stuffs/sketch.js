// Buubble sort


let theStuff = [5, 15, 3, 8, 9, 1, 20, 7]

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(bubbleSort(theStuff));
  console.log(selectSort(theStuff));
  
}

function draw() {
  background(220);
}

function bubbleSort(someArray){
  let isGood = false;

  while (isGood === false){
    isGood = true;
    for(let i = 0; i < someArray.length-1; i++){
      let holding;
      if (someArray[i] > someArray[i+1]){
        holding = someArray[i];
        someArray[i] = someArray[i+1];
        someArray[i+1] = holding;
        isGood = false;
      }
    }
  }
  return someArray;
}

function selectSort(someArray){
  for (i = 0; i < someArray.length; i++){
    let smallest = 0;
    for (j = 0; j < someArray.length; j++){
      if (someArray[j] < smallest){
        smallest = someArray[j];
      }
      let holding = someArray[i];
      someArray[i] = someArray[smallest];
      someArray[smallest] = holding;
    }
  }
  return someArray;
}