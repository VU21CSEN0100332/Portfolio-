let hiremeBtn = document.getElementById("HireME");
let whatsupNumbergiven = document.getElementById("whatsupNumbergiven");
let submitwtNumber = document.getElementById("submitwtNumber");
let mobNUmbergiven = document.getElementById("mobNUmbergiven");
let submitMobNumber = document.getElementById("submitMobNumber");
let checkBoxTicked = document.getElementById("checkBoxTicked");
let labelcheck = document.getElementById("labelcheck");
let sucessEnd = document.getElementById("succesEnding");




submitwtNumber.addEventListener("click", function() {
    let numberGiven = whatsupNumbergiven.value;
    JSON.stringify(numberGiven)
    localStorage.setItem("whatsupnumber", numberGiven);
})

checkBoxTicked.addEventListener("click", function() {
    let valueget = localStorage.getItem("whatsupnumber");
    JSON.parse(valueget)
    mobNUmbergiven.value = valueget;
})

submitMobNumber.addEventListener("click", function() {
    if (whatsupNumbergiven.value !== "" && mobNUmbergiven.value !== "") {
        sucessEnd.textContent = "Done";
        sucessEnd.classList.add("sucessEnd")

    }
})

hiremeBtn.addEventListener("click", function() {
    hiremeBtn.textContent = "Mail Id: phanindrareddy191@gmail.com";
    hiremeBtn.style.color = "black"
    hiremeBtn.style.backgroundColor = "white";
})