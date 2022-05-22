// Select total count
const totalCount = document.querySelector("output");
const header = document.querySelector("h1");
const resetBtn = document.querySelector("reset-btn");

// Variable to track count
let count = 0;

// const countarr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// const countarr01 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

// for (let i = 0; i < countarr.length; i++) {
//   console.log(countarr[i]);
// }

// Display initial count value
totalCount.textContent = count;

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.textContent = count;

  // totalCount.textContent <= 9
  //   ? console.log("nic")
  //   : totalCount.textContent >= 10 <= 19
  //   ? console.log(`Good Job you can stop now!👌`)
  //   : totalCount.textContent <= 20 <= 29
  //   ? console.log(`SRSLY stop this!🤬`)
  //   : "";
  if (totalCount.value > 0 && totalCount.value < 9) {
    header.textContent = `?`;
  } else if (totalCount.value >= 10 && totalCount.value <= 19) {
    // return console.log("Good Job you can stop now!👌");
    return (header.textContent = `Good Job you can stop now!👌`);
  } else if (totalCount.value >= 20 && totalCount.value <= 29) {
    // return console.log("SRSLY stop this!🤬");
    return (header.textContent = `SRSLY stop this!🤬`);
  }
};

const button = document.getElementById("add-btn");
button.addEventListener("click", handleIncrement);

const def = () => {
  count = totalCount.value = 0;
  header = header.textContent = `?`;
};

const defButton = document.getElementById("reset-btn");
defButton.addEventListener("click", def);
