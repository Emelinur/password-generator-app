const passwordGenText = document.querySelector(".password-gen_text");
const copyBtn = document.querySelector(".password-gen_copy-btn");
const LengthSlider = document.querySelector("#length-slider");
const uppercaseCheckbox = document.querySelector("#uppercase");
const lowerCaseCheckbox = document.querySelector("#lowercase");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");
const strengthMeterText = document.querySelector(".strength-meter_text");
const strengthMeterBars = document.querySelector(".strength-meter_bars");
const generateButton = document.querySelector(".generate-btn");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolsChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

copyBtn.addEventListener("click", () => {
  let copy = passwordGenText.value;
  console.log(copy);
});

LengthSlider.addEventListener("input", (e) => {
  const currentValue = e.target.value;
  const min = e.target.min;
  const max = e.target.max;
  const percentage = ((currentValue - min) * 100) / (max - min);
  e.target.style.background = `linear-gradient(to right, #A4FFAF ${percentage}%, #18171F ${percentage}%)`;
});

generateButton.addEventListener("click", () => {
  passwordGenText.value = "";
  let passwordPool = "";
  if (uppercaseCheckbox.checked) {
    passwordPool += uppercaseChars;
  }
  if (lowerCaseCheckbox.checked) {
    passwordPool += lowercaseChars;
  }
  if (numbersCheckbox.checked) {
    passwordPool += numberChars;
  }
  if (symbolsCheckbox.checked) {
    passwordPool += symbolsChars;
  }
  let slider = LengthSlider.value;
  for (i = 0; i < slider; i++) {
    let randomOrder = Math.floor(Math.random() * passwordPool.length);
    passwordGenText.value += passwordPool[randomOrder];
  }
});
