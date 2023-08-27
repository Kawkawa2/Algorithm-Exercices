// --------------------------------selection sort:--------------------------------------------
let itemsList = [];
let n = 10;
for (let i = 0; i < n; i++) {
  var item = prompt("enter a number please");
  if (item === null) {
    alert("please enter a valid value");
  }
  itemsList.push(item);
}
console.log(itemsList);

// creat a swap method:
const swap = (min, i) => {
  let helper;
  helper = itemsList[min];
  itemsList[min] = itemsList[i];
  itemsList[i] = helper;
};

// swap(1,2)
// console.log(itemsList);

// // creating the sort algorithm

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
