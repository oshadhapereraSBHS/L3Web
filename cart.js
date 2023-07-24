window.onload = function () {
    //don't show items that weren't added to cart (if quantity is 0 or null)
    if (localStorage.getItem("quantity1") == 0 || localStorage.getItem("quantity1") == null) {
        document.getElementById("cartProducts1").style.display = "none";

    }
    if (localStorage.getItem("quantity2") == 0 || localStorage.getItem("quantity2") == null) {
        document.getElementById("cartProducts2").style.display = "none";
    }

    if (localStorage.getItem("quantity3") == 0 || localStorage.getItem("quantity3") == null) {
        document.getElementById("cartProducts3").style.display = "none";

    }
    if (localStorage.getItem("quantity4") == 0 || localStorage.getItem("quantity4") == null) {
        document.getElementById("cartProducts4").style.display = "none";

    }
    if (localStorage.getItem("quantity5") == 0 || localStorage.getItem("quantity5") == null) {
        document.getElementById("cartProducts5").style.display = "none";

    }
    if (localStorage.getItem("quantity6") == 0 || localStorage.getItem("quantity6") == null) {
        document.getElementById("cartProducts6").style.display = "none";

    }


    //update the stored quantities by storing the values in the cart. This allows users to change quantities in the cart page.
    document.getElementById("quantity1").value = localStorage.getItem("quantity1");
    document.getElementById("quantity2").value = localStorage.getItem("quantity2");
    document.getElementById("quantity3").value = localStorage.getItem("quantity3");
    document.getElementById("quantity4").value = localStorage.getItem("quantity4");
    document.getElementById("quantity5").value = localStorage.getItem("quantity5");
    document.getElementById("quantity6").value = localStorage.getItem("quantity6");



}

//removing items from cart

function remove1() {
    //set item quantity to 0
    document.getElementById("quantity1").value = 0;
    //remove item from cart
    document.getElementById("cartProducts1").style.display = "none";
    //store the quantity as 0
    localStorage.setItem("quantity1", document.getElementById("quantity1").value)

}

//above repeated for every product
function remove2() {
    document.getElementById("cartProducts2").style.display = "none";
    localStorage.setItem("quantity2", 0)

}

function remove3() {
    document.getElementById("cartProducts3").style.display = "none";
    localStorage.setItem("quantity3", 0)

}

function remove4() {
    document.getElementById("cartProducts4").style.display = "none";
    localStorage.setItem("quantity4", 0)

}

function remove5() {
    document.getElementById("cartProducts5").style.display = "none";
    localStorage.setItem("quantity5", 0)

}

function remove6() {
    document.getElementById("cartProducts6").style.display = "none";
    localStorage.setItem("quantity6", 0)

}



function minus1() {
    //if the product in the cart (so quantity is > 0)
    if (localStorage.getItem("quantity1") > 0) {
        //reduce quantity by 1
        document.getElementById("quantity1").stepDown();
        //store new value as quantity
        localStorage.setItem("quantity1", document.getElementById("quantity1").value);

    }
    //if user removes items using minus button
    if (localStorage.getItem("quantity1") == 0) {
        //remove products from cart
        document.getElementById("cartProducts1").style.display = "none";

    }
}

function plus1() {
    //increase quantity by 1
    document.getElementById("quantity1").stepUp();
    //store new value as quantity
    localStorage.setItem("quantity1", document.getElementById("quantity1").value)

}

//above repeated for every product
function minus2() {
    if (localStorage.getItem("quantity2") > 0) {
        document.getElementById("quantity2").stepDown();
        localStorage.setItem("quantity2", document.getElementById("quantity2").value)
    }

    if (localStorage.getItem("quantity2") == 0) {
        document.getElementById("cartProducts2").style.display = "none";

    }

}

function plus2() {
    document.getElementById("quantity2").stepUp();
    localStorage.setItem("quantity2", document.getElementById("quantity2").value)

}


function minus3() {
    if (localStorage.getItem("quantity3") > 0) {
        document.getElementById("quantity3").stepDown();
        localStorage.setItem("quantity3", document.getElementById("quantity3").value)

    }
    if (localStorage.getItem("quantity3") == 0) {
        document.getElementById("cartProducts3").style.display = "none";

    }
}

function plus3() {

    document.getElementById("quantity3").stepUp();
    localStorage.setItem("quantity3", document.getElementById("quantity3").value)

}

function minus4() {
    if (localStorage.getItem("quantity4") > 0) {

        document.getElementById("quantity4").stepDown();
        localStorage.setItem("quantity4", document.getElementById("quantity4").value)

    }
    if (localStorage.getItem("quantity4") == 0) {
        document.getElementById("cartProducts4").style.display = "none";

    }
}

function plus4() {
    document.getElementById("quantity4").stepUp();

    localStorage.setItem("quantity4", document.getElementById("quantity4").value)

}

function minus5() {
    if (localStorage.getItem("quantity5") > 0) {
        document.getElementById("quantity5").stepDown();
        localStorage.setItem("quantity5", document.getElementById("quantity5").value)

    }
    if (localStorage.getItem("quantity5") == 0) {
        document.getElementById("cartProducts5").style.display = "none";

    }
}

function plus5() {

    document.getElementById("quantity5").stepUp();
    localStorage.setItem("quantity5", document.getElementById("quantity5").value)

}

function minus6() {
    if (localStorage.getItem("quantity6") > 0) {
        document.getElementById("quantity6").stepDown();
        localStorage.setItem("quantity6", document.getElementById("quantity6").value)

    }
    if (localStorage.getItem("quantity6") == 0) {
        document.getElementById("cartProducts6").style.display = "none";

    }
}

function plus6() {
    document.getElementById("quantity6").stepUp();
    localStorage.setItem("quantity6", document.getElementById("quantity6").value)


}

//when checkout button is pressed, take user to checkout.html
function checkout() {
    location.href = "checkout.html"
}

//update item number shown beside cart every 0.2 second

setInterval(updateItemNumber, 200);

function updateItemNumber() {
    //set a variable for total quantity of items
    var totalItems = (localStorage.getItem("quantity1") * 1 +
        localStorage.getItem("quantity2") * 1 +
        localStorage.getItem("quantity3") * 1 +
        localStorage.getItem("quantity4") * 1 +
        localStorage.getItem("quantity5") * 1 +
        localStorage.getItem("quantity6") * 1);

    if (totalItems > 0 && totalItems != null) {
        //if total item number is above 0 or null, show item number beside cart
        document.getElementById("itemNumber").style.display = "block";
        document.getElementById("itemNumber").innerHTML = totalItems;
    } else {
        //if total item number is below 0, don't show item number beside cart
        document.getElementById("itemNumber").style.display = "none";
    }

}

//update total every 0.2 seconds
setInterval(updateItems, 200);

function updateItems() {
    //calculate total items in cart
    var totalItems = (localStorage.getItem("quantity1") * 1 +
        localStorage.getItem("quantity2") * 1 +
        localStorage.getItem("quantity3") * 1 +
        localStorage.getItem("quantity4") * 1 +
        localStorage.getItem("quantity5") * 1 +
        localStorage.getItem("quantity6") * 1);

    if (totalItems == 0) {
        //if cart is empty
        //say cart is empty, and hide the checkout button and total price field

        document.getElementById("checkoutButton").style.display = "none";
        document.getElementById("price").innerHTML = "Your cart is empty.";

    } else {
        //if there are items in cart, show checkout button and hide 'cart is empty' message
        document.getElementById("checkoutButton").style.display = "block";


        //show total for each item by multiplying quantity with price for each item
        document.getElementById("total1").innerHTML = '$' + localStorage.getItem("quantity1") * 19;
        document.getElementById("total2").innerHTML = '$' + localStorage.getItem("quantity2") * 19;
        document.getElementById("total3").innerHTML = '$' + localStorage.getItem("quantity3") * 19;
        document.getElementById("total4").innerHTML = '$' + localStorage.getItem("quantity4") * 4;
        document.getElementById("total5").innerHTML = '$' + localStorage.getItem("quantity5") * 4;
        document.getElementById("total6").innerHTML = '$' + localStorage.getItem("quantity6") * 4;

        //calculate total price by adding all individual prices
        var totalPrice = (localStorage.getItem("quantity1") * 19 +
            localStorage.getItem("quantity2") * 19 +
            localStorage.getItem("quantity3") * 19 +
            localStorage.getItem("quantity4") * 4 +
            localStorage.getItem("quantity5") * 4 +
            localStorage.getItem("quantity6") * 4)


        //show total price
        document.getElementById("totalPrice").innerHTML = '$' + totalPrice;
    }

}