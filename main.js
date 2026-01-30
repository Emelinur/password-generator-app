const passwordGenText = document.querySelector(".password-gen_text");
const copyBtn = document.querySelector(".password-gen_copy-btn");
const copyBtnText = document.querySelector(".password-gen_copyied_Text");
const LengthSlider = document.querySelector("#length-slider");
const sliderValue = document.querySelector("#length-value");
const uppercaseCheckbox = document.querySelector("#uppercase");
const lowerCaseCheckbox = document.querySelector("#lowercase");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");
const strengthMeterText = document.querySelector(".strength-meter_text");
const bars = document.querySelectorAll(".bar");
const generateButton = document.querySelector(".generate-btn");

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolsChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";


// password Copy
copyBtn.addEventListener("click", () => {
  let copy = passwordGenText.value;
  if (!passwordGenText.value) return;
  navigator.clipboard.writeText(passwordGenText.value);
  copyBtnText.style.display = "block";
  setTimeout(() => {
    copyBtnText.style.display = "none";
  }, 2000);
});

// Character Slider
LengthSlider.addEventListener("input", (e) => {
  const currentValue = e.target.value;
  const min = e.target.min;
  const max = e.target.max;
  const percentage = ((currentValue - min) * 100) / (max - min);
  e.target.style.background = `linear-gradient(to right, #A4FFAF ${percentage}%, #18171F ${percentage}%)`;
  sliderValue.innerText = LengthSlider.value;
});

// Generate Button
generateButton.addEventListener("click", () => {
  // Character checkbox 
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

if (passwordPool === "") {
        strengthMeterText.innerText = "";
        bars.forEach(bar => {
            bar.classList.remove("bar-active");
            bar.style.backgroundColor = "";
        });
        return;
    }
  let slider = LengthSlider.value;

  for (let i = 0; i < slider; i++) {
    let randomOrder = Math.floor(Math.random() * passwordPool.length);
    passwordGenText.value += passwordPool[randomOrder];
  }
  
// Password Strength
  let point = 0;
  if (slider <= 5) {
    point = 1;
    strengthMeterText.innerText = "TOO WEAK!";
  } else if (slider <= 10) {
    point = 2;
    strengthMeterText.innerText = "WEAK";
  } else if (slider <= 15) {
    point = 3;
    strengthMeterText.innerText = "MEDIUM";
  } else {
    point = 4;
    strengthMeterText.innerText = "STRONG";
  }

  bars.forEach((bar, index) => {
    bar.classList.remove("bar-active");
    bar.style.backgroundColor = "";

    if (index < point) {
      bar.classList.add("bar-active");
    }
  });
});
