const bill = document.getElementById('bill-input');
const tip = document.querySelectorAll('.btn-Tip');
const customTip = document.getElementById('tip-input');
const person = document.getElementById('person-input');
const ppCheck = document.getElementById('people-check');
const reset = document.getElementById('reset');
const displayTip = document.getElementById('total-tip-per-person');
const displayTotal = document.getElementById('total-amount-per-person');

let getTip = 0;
let getBill = 0;
let getPeople = 0;

// tip input
tip.forEach(btn =>{
  btn.addEventListener("click" , ()=>{
    if(btn.value != ""){
      getTip = btn.value;
      calculate();
    } else {
      getTip = 0;
    }
    customTip.value = "";
    calculate();
  })
});

customTip.addEventListener("input" , ()=> {
  if(customTip.value >= 0) {
    getTip = customTip.value;
    calculate();
  }
})

bill.addEventListener("input" , ()=> {
  getBill = Number(bill.value);
  calculate();
})

person.addEventListener("input" , ()=> {
  getPerson = Number(person.value);
  if(person.value == "" && person.value <= 0){
    ppCheck.style.opacity = "1";
    person.classList.add("inputCheck");
    calculate();
  } else {
    ppCheck.style.opacity = "0";
    person.classList.remove("inputCheck");
    calculate();
  }
})

reset.addEventListener("click" , clearAll);
clearAll();
function clearAll() {
    bill.value = "";
    tip.value = "";
    person.value = "";
    customTip.value = "";

    displayTotal.innerText = "0.00";
    displayTip.innerText = "0.00";
}

function calculate() {
  if(getBill > 0 && getPerson != 0) {
    let totalTip = (getBill*(getTip/100))/getPerson;
    let totalBill = (getBill+(getBill*(getTip/100)))/getPerson;
    displayTip.innerText = totalTip.toFixed(2);
    displayTotal.innerText = totalBill.toFixed(2);
  } else {
    displayTotal.innerText = "0.00";
    displayTip.innerText = "0.00";
  }
}