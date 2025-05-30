let selectedTip = 0;

function setTip(percentage) {
    selectedTip = percentage;
    document.getElementById("customTip").value = "";
}

function calculateTip() {
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let customTip = parseFloat(document.getElementById("customTip").value);

    let tipPercentage = selectedTip || customTip;

    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount!");
        return;
    }
    
    if (isNaN(tipPercentage) || tipPercentage < 0) {
        alert("Please select or enter a valid tip percentage!");
        return;
    }

    let tipAmount = (billAmount * tipPercentage) / 100;
    let totalAmount = billAmount + tipAmount;

    document.getElementById("tipAmount").textContent = `Tip Amount:           $${tipAmount.toFixed(2)}`;
    document.getElementById("totalAmount").textContent = `Total Bill:           $${totalAmount.toFixed(2)}`;
}

function reset(){
    document.getElementById("tipAmount").textContent = `Tip Amount:           0.00 `;
    document.getElementById("totalAmount").textContent = `Total Bill:           0.00 `;
}