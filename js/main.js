function addToCart() {
    alert("No Longer in Stock");
}

let quantityLabel = document.getElementById("QuantityProduct");

function decreaseQuanity(){
    let quantity = parseInt(quantityLabel.innerHTML);
    quantity = quantity - 1;
    if (quantity < 0) {
        quantity = 0;
    }
    quantityLabel.innerHTML = quantity.toString();
}

function increaseQuantity(){
    let quantity = parseInt(quantityLabel.innerHTML);
    quantity = quantity + 1;
    quantityLabel.innerHTML = quantity.toString();
}