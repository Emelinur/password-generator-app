const passwordGenText=document.querySelector(".password-gen_text");
const copyBtn=document.querySelector(".password-gen_copy-btn");
const characterLengthSlider=document.querySelector(".character-length_slider");
const uppercaseCheckbox=document.querySelector("#uppercase");
const lowerCaseCheckbox=document.querySelector("#lowercase");
const numbersCheckbox=document.querySelector("#numbers");
const symbolsCheckbox=document.querySelector("#symbols");
const strengthMeterText=document.querySelector(".strength-meter_text");
const strengthMeterBars=document.querySelector(".strength-meter_bars");
const generateButton=document.querySelector(".generate-btn");


const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolsChars="!@#$%^&*()_+~`|}{[]:;?><,./-=";

copyBtn.addEventListener("click",()=>{
 let copy= passwordGenText.value
 console.log(copy)
})

characterLengthSlider.addEventListener("input",(e)=>{
 const currentValue = e.target.value;
 const min=e.target.min;
 const max=e.target.max;
    const percentage=((currentValue - min) * 100) / (max - min);  
    e.target.style.background = `linear-gradient(to right, #A4FFAF ${percentage}%, #18171F ${percentage}%)`
    ;
});




generateButton.addEventListener("click", ()=>{

  if(uppercaseCheckbox.checked){
passwordGenText.value=uppercaseChars[Math.floor(Math.random()*uppercaseChars.length)]
console.log(passwordGenText.value)
  }
   if(lowerCaseCheckbox.checked){
passwordGenText.value=lowercaseChars[Math.floor(Math.random()*lowercaseChars.length)]
console.log(passwordGenText.value)
  }
  if(numbersCheckbox.checked){
passwordGenText.value=numberChars[Math.floor(Math.random()*10)]
console.log(passwordGenText.value)
  }
  if(symbolsCheckbox.checked){
passwordGenText.value=symbolsChars[Math.floor(Math.random()*symbolsChars.length)]
console.log(passwordGenText.value)
  }


})




