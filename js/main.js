function calcAmount() {
    let price= 1000;
    let amountInput= document.querySelector("input[name='amount-input']");
    let showAmount= document.querySelector("span.show-amount");
    let amountNumber= parseInt(amountInput.value)
if (isNaN(amountNumber)){amountNumber=0}


    if (amountNumber > 10 ) {
        alert("Max. 10 terméket vásárolhat!");
        /* return ha az else nem lenne benne */
    } else if (amountNumber < 1) {
        alert("Min. 1 terméket vásárolhat! ")
    } else {
        let amount=parseInt(amountInput.value)* price;
    showAmount.innerHTML=amount;
    }
}

// Select elem kitöltése
let toppings= [
    "Szalonna",
    "Tükörtojás",
    "Extra sonka",
    "Libamáj",
    "Redva",
]
let toppingSelect = document.querySelector("#topInput");
let index=0;
while(index < toppings.length) {
    let option=document.createElement("option");
    option.value=index;
    option.innerHTML=toppings[index];
    toppingSelect.appendChild(option);
    index ++ ;
}

