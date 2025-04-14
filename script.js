const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const numberToRoman = (input) => {
  const roman = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let output = "";
  roman.forEach((item)=> {
    while(input >= item.value){
      output += item.symbol;
      input -= item.value;
    }
  });
  return output;
}

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  let alertText = '';

  if (numberInput.value === "" || isNaN(inputInt)) {
    alertText = "Please enter a valid number";
    showAlert(alertText);
  } else if (inputInt < 1) {
    alertText = "Please enter a number greater than or equal to 1";
    showAlert(alertText);
  } else if (inputInt >= 4000) {
    alertText = "Please enter a number less than or equal to 3999";
    showAlert(alertText);
  } else {
    output.textContent = numberToRoman(inputInt);
    output.classList.remove("hidden");
    output.classList.remove("alert"); // Remove alert styling if present
    numberInput.value = "";
  }
};

const showAlert = (alertText) => {
  output.textContent = alertText;
  output.classList.add("alert");
  output.classList.remove("hidden"); // Ensure the alert is visible
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e)=>{
  if (e.key === "Enter"){
    checkUserInput();
  }
});
