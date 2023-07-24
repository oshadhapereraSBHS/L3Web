window.onload = function () {
    document.getElementById("totalValue").innerHTML = "$" + (localStorage.getItem("quantity1") * 19 +
        localStorage.getItem("quantity2") * 19 +
        localStorage.getItem("quantity3") * 19 +
        localStorage.getItem("quantity4") * 4 +
        localStorage.getItem("quantity5") * 4 +
        localStorage.getItem("quantity6") * 4)
    //set all quantities to stored values.

    document.getElementById("quantity1").value = localStorage.getItem("quantity1")
    document.getElementById("quantity2").value = localStorage.getItem("quantity2")
    document.getElementById("quantity3").value = localStorage.getItem("quantity3")
    document.getElementById("quantity4").value = localStorage.getItem("quantity4")
    document.getElementById("quantity5").value = localStorage.getItem("quantity5")
    document.getElementById("quantity6").value = localStorage.getItem("quantity6")
    //above changes and below if conditions means that the product quantities will not turn to 0 when page is refreshed and still shows a value of 0 for items the user have not changed



    //if an element has a value of null, set it to 0.
    if (localStorage.getItem("quantity1") == null) {
        document.getElementById("quantity1").value = 0
    }
    if (localStorage.getItem("quantity2") == null) {
        document.getElementById("quantity2").value = 0
    }
    if (localStorage.getItem("quantity3") == null) {
        document.getElementById("quantity3").value = 0
    }
    if (localStorage.getItem("quantity4") == null) {
        document.getElementById("quantity4").value = 0
    }
    if (localStorage.getItem("quantity5") == null) {
        document.getElementById("quantity5").value = 0
    }
    if (localStorage.getItem("quantity6") == null) {
        document.getElementById("quantity6").value = 0
    }


}




function minus1() {
    //if user have added items to cart (so quantity is > 0)
    if (localStorage.getItem("quantity1") > 0) {
        //reduce quantity by 1
        document.getElementById("quantity1").stepDown();
        //store new value as quantity
        localStorage.setItem("quantity1", document.getElementById("quantity1").value)
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

}

function plus6() {
    document.getElementById("quantity6").stepUp();
    localStorage.setItem("quantity6", document.getElementById("quantity6").value)


}


function updateQuantity1() {
    //when add to cart button is pressed, store the value entered by user
    localStorage.setItem("quantity1", document.getElementById("quantity1").value)
}

//repeat above for every product
function updateQuantity2() {
    localStorage.setItem("quantity2", document.getElementById("quantity2").value)
}

function updateQuantity3() {
    localStorage.setItem("quantity3", document.getElementById("quantity3").value)
}

function updateQuantity4() {
    localStorage.setItem("quantity4", document.getElementById("quantity4").value)
}

function updateQuantity5() {
    localStorage.setItem("quantity5", document.getElementById("quantity5").value)
}

function updateQuantity6() {
    localStorage.setItem("quantity6", document.getElementById("quantity6").value)
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