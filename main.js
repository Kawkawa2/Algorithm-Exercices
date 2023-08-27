// --------------------------------selection sort:--------------------------------------------
let n = 10;
let itemsList = [];

// creat a user enteries method:

const userEnteries = () => {
  for (let i = 0; i < n; i++) {
    var item = prompt("enter a number please");
    if (item === null) {
      alert("please enter a valid value");
    }
    itemsList.push(item);
  }
  console.log(itemsList);
};

// creat a swap method:

const swap = (index1, index2) => {
  let helper;
  helper = itemsList[index1];
  itemsList[index1] = itemsList[index2];
  itemsList[index2] = helper;
};

// testing the swap method

// swap(1,2)
// console.log(itemsList);

//  creating the selection sort algorithm

const selectionSort = () => {
  alert("this is the selection sort");
  // calling the user enteries method:
  userEnteries();
  for (i = 0; i < n - 1; i++) {
    let currentMin = i;
    for (j = i + 1; j < n; j++) {
      if (parseInt(itemsList[j]) < parseInt(itemsList[currentMin])) {
        currentMin = j;
      }
    }

    if (parseInt(currentMin) !== i) {
      swap(parseInt(currentMin), i);
    }
    console.log(itemsList[currentMin]);
  }
  console.log(itemsList);
};

// calling the sort method:
// selectionSort();

// --------------------------------Bubble sort:--------------------------------------------

// creating the  Bubble sort algorithm

const BubbleSort = () => {
  alert("this is the bubble sort");

  // calling the user enteries method:
  userEnteries();
  for (i = 1; i < n; i++) {
    for (j = 0; j < n - 1; j++) {
      if (parseInt(itemsList[j]) > parseInt(itemsList[j + 1])) {
        swap(parseInt(j), parseInt(j + 1));
      }
    }
  }
  console.log(itemsList);
};
// calling the sort method:
// BubbleSort();

// --------------------------------Insertion sort:--------------------------------------------

// creating the  Bubble sort algorithm

const InsertionSort = () => {
  alert("this is the insertion sort");

  // calling the user enteries method:
  userEnteries();
  for (i = 1; i < n; i++) {
    let j = i;
    while (j > 0 && parseInt(itemsList[j]) < parseInt(itemsList[j - 1])) {
      swap(parseInt(j), parseInt(j - 1));
      j--;
    }
  }
  console.log(itemsList);
};
// calling the sort method:
// InsertionSort();

// --------------------------------Linear search:--------------------------------------------

// creating the  Bubble sort algorithm

const linearSearch = () => {
  alert("this is the linear search");

  // calling the user enteries method:
  userEnteries();
  // ask the user to enter the target element
  const targetElem = prompt("enter the target element please:");
  if (targetElem === null || targetElem === "") {
    alert("the target element entered not valid");
  }
  let targetElemIndex;
  for (let i = 0; i < itemsList.length; i++) {
    if (parseInt(targetElem) === parseInt(itemsList[i])) {
      targetElemIndex = i;
      break;
    }
  }
  if (targetElemIndex) {
    console.log("the target element's index is: " + targetElemIndex);
  } else {
    console.log("the target element entered not found!");
  }
};
// calling the search method:
linearSearch();
