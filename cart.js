function signUpPage() {
    //when sign up button is pressed, redirect to signup.html
    location.href = "signup.html";
}

//variables
var dropdown1Clicks = 1;
var dropdown2Clicks = 1;
var dropdown1Display = false;
var dropdown2Display = false;

window.onload = function () {
    //save how many times the dark mode icon was clicked
    localStorage.setItem("darkModeCount", Number(localStorage.getItem("darkModeCount")));
    localStorage.setItem("darkMode", localStorage.getItem("darkMode"));
    //if dark mode is pressed once, or in multiples of two after that, change to dark mode
    if (localStorage.getItem("darkModeCount") % 2 == 0) {
        darkModeChanges();
    }

    if (localStorage.getItem("darkMode") == "true") {
        //set main heading colors to white in dark mode
        document.getElementById("overview").style.color = "white";
        document.getElementById("forMembers").style.color = "white";
        document.getElementById("contact").style.color = "white";
    }


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







    //set all quantities to stored values.
    document.getElementById("quantity1").value = localStorage.getItem("quantity1");
    document.getElementById("quantity2").value = localStorage.getItem("quantity2");
    document.getElementById("quantity3").value = localStorage.getItem("quantity3");
    document.getElementById("quantity4").value = localStorage.getItem("quantity4");
    document.getElementById("quantity5").value = localStorage.getItem("quantity5");
    document.getElementById("quantity6").value = localStorage.getItem("quantity6");

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

function darkModeChanges() {
    if (localStorage.getItem("darkModeCount") % 2 == 0) {
        //wen dark mode us on, change dark incon to light icon
        //change icon colors to white
        localStorage.setItem("darkMode", "true")
        document.getElementById("logo").src = "images/logoDark.svg"
        document.getElementById("dark").src = "images/light.png"
        document.getElementById("dark").title = "Switch to Light Mode"
        document.getElementById("cart").src = "images/cartDark.png";
        document.getElementById("itemNumber").style.color = "white";
        document.getElementById("dark").style.width = "60%";
        //change background colors to black and nav bar links to white
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.9)";

        document.getElementById("html").style.background = "none";

        document.body.style.color = "rgba(0, 0, 0, 0.8)"
        document.getElementById("overview").style.color = "white";
        document.getElementById("forMembers").style.color = "white";
        document.getElementById("contact").style.color = "white";
        document.getElementsByClassName("links")[0].style.color = "white"
        document.getElementsByClassName("links")[1].style.color = "white"
        document.getElementsByClassName("links")[2].style.color = "white"
        document.getElementsByClassName("links")[3].style.color = "white"
        document.getElementsByClassName("links")[4].style.color = "white"
        document.getElementsByClassName("links")[5].style.color = "white"
        document.getElementsByClassName("links")[6].style.color = "white"
        document.getElementsByClassName("links")[7].style.color = "white"
        document.getElementById("forMembers").style.color = "white"
        if (dropdown1Display) {
            //add box shadow when dropdown 1 is clicked
            document.getElementById("overview").style.boxShadow = "-2px -2px 1px 0 white"
        }
        if (dropdown2Display) {
            //add box shadow when dropdown 2 is clicked
            document.getElementById("forMembers").style.boxShadow = "-2px -2px 1px 0 white"
        }


        document.getElementById("dropdownItems2").style.boxShadow = "2px 2px 1px 0 white"
        document.getElementById("dropdownItems1").style.boxShadow = "2px 2px 1px 0 white"
    } else {
        //when dark mode is turned off, reload page with light mode
        localStorage.setItem("darkMode", "false")

        location.reload();

    }
}

function darkModeOn() {
    //when dark mode is turned on, increase dark mode count by 1
    localStorage.setItem("darkModeCount", Number(localStorage.getItem("darkModeCount")) + 1);
    darkModeChanges();

}

function dropdown1() {
    //when dropdown 1 is clicked, set dropdown 2 count to  and increase dropdown 1 count by 1
    dropdown2Clicks = 1;
    dropdown1Clicks++;
    dropdown2Display = false;
    if (localStorage.getItem("darkMode") == "true") {
        //when dropdown is clicked in dark mode, show links in white
        document.getElementsByClassName("links")[0].style.color = "white"
        document.getElementsByClassName("links")[1].style.color = "white"
        document.getElementsByClassName("links")[2].style.color = "white"
        document.getElementsByClassName("links")[3].style.color = "white"

    }
    if (dropdown1Clicks % 2 === 0) {
        dropdown1Display = true;
        //when dropdown 1 is clicked, show dropdown 1 items
        document.getElementById("dropdownItems1").style.display = "grid";

        document.getElementById("forMembers").style.boxShadow = "none";
        document.getElementById("dropdownItems2").style.display = "none";
        if (localStorage.getItem("darkMode") == "true") {
            //when dark mode is turned on, change nav links ot white
            document.getElementById("forMembers").style.color = "#999"
            document.getElementById("contact").style.color = "#999"
            document.getElementById("overview").style.color = "white"
            document.getElementById("overview").style.boxShadow = "-2px -2px 1px 0 white"
            document.getElementById("dropdownItems1").style.boxShadow = "2px 2px 1px 0 white"
            document.getElementsByClassName("links")[0].style.color = "white"
            document.getElementsByClassName("links")[1].style.color = "white"
            document.getElementsByClassName("links")[2].style.color = "white"
            document.getElementsByClassName("links")[3].style.color = "white"
            document.getElementsByClassName("links")[4].style.color = "white"
            document.getElementsByClassName("links")[5].style.color = "white"
            document.getElementsByClassName("links")[6].style.color = "white"
            document.getElementsByClassName("links")[7].style.color = "white"

        } else {
            //when light mode is turned on, change clicked linked to blue and others to grey
            document.getElementById("overview").style.boxShadow = "-2px -2px 1px 0 black";
            document.getElementById("overview").style.color = "#073B4C"
            document.getElementById("forMembers").style.color = "#999"
            document.getElementById("contact").style.color = "#999"
        }


    } else {
        dropdown1Display = false;
        //if dropdown is not pressed, hide dropdown items
        document.getElementById("dropdownItems1").style.display = "none";

        document.getElementById("overview").style.boxShadow = "none"
        if (localStorage.getItem("darkMode") == "false" || localStorage.getItem("darkMode") == null) {
            //if dark light mode is selected, change main headings to blue
            document.getElementById("forMembers").style.color = "#073B4C"
            document.getElementById("overview").style.color = "#073B4C"
            document.getElementById("contact").style.color = "#073B4C"
        }
    }



}

//above structure is also used for the second dropdown menu
function dropdown2() {
    dropdown1Display = false;
    dropdown1Clicks = 1;
    dropdown2Clicks++;
    if (localStorage.getItem("darkMode") == "true") {
        document.getElementsByClassName("links")[4].style.color = "white"
        document.getElementsByClassName("links")[5].style.color = "white"
        document.getElementsByClassName("links")[6].style.color = "white"
        document.getElementsByClassName("links")[7].style.color = "white"
    }
    if (dropdown2Clicks % 2 === 0) {


        dropdown2Display = true;
        document.getElementById("dropdownItems2").style.display = "grid";
        document.getElementById("dropdownItems1").style.display = "none";
        document.getElementById("overview").style.boxShadow = "none";
        if (localStorage.getItem("darkMode") == "true") {


            document.getElementById("overview").style.color = "#999"
            document.getElementById("contact").style.color = "#999"
            document.getElementById("forMembers").style.color = "white"
            document.getElementById("forMembers").style.boxShadow = "-2px -2px 1px 0 white"
            document.getElementById("dropdownItems2").style.boxShadow = "2px 2px 1px 0 white"

        } else {

            document.getElementById("overview").style.color = "#999"
            document.getElementById("contact").style.color = "#999"
            document.getElementById("forMembers").style.color = "#073B4C"
            document.getElementById("forMembers").style.boxShadow = "-2px -2px 1px 0 black"
        }
    } else {
        dropdown2Display = false;
        document.getElementById("dropdownItems2").style.display = "none";
        document.getElementById("forMembers").style.boxShadow = "none"
        if (localStorage.getItem("darkMode") == "false" || localStorage.getItem("darkMode") == null) {
            document.getElementById("overview").style.color = "#073B4C"
            document.getElementById("forMembers").style.color = "#073B4C"
            document.getElementById("contact").style.color = "#073B4C"

        }
    }
}



//redirect to index.html when logo image is clicked
function home() {
    location.href = "index.html";
}



function logoChange1() {
    if (localStorage.getItem("darkMode") == "true") {
        document.getElementById("logo").src = "images/logoDark1.svg";
    } else {
        document.getElementById("logo").src = "images/logo1.svg";

    }

}

function logoChange2() {
    if (localStorage.getItem("darkMode") == "true") {
        document.getElementById("logo").src = "images/logoDark.svg";
    } else {
        document.getElementById("logo").src = "images/logo.svg";

    }

}

//redirect to cart.html when cart icon is pressed
function cartPage() {
    location.href = "cart.html";
}


function checkout() {


    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    //when checkout button is pressed, ask for names and email if these are not filled
    if (firstName = null || firstName == "") {
        alert("Please enter your first name");
    } else if (lastName = null || lastName == "") {
        alert("Please enter your last email");
    } else if (email = null || email == "") {
        alert("Please enter your email");
    } else {
        //if required fields are filled, show thank you message and reset cart quantities to 0
        document.getElementById("form4").innerHTML = "Thank you for shopping with us!";
        document.getElementById("form5").style.display = "none";
        localStorage.setItem("quantity1", 0);
        localStorage.setItem("quantity2", 0);
        localStorage.setItem("quantity3", 0);
        localStorage.setItem("quantity4", 0);
        localStorage.setItem("quantity5", 0);
        localStorage.setItem("quantity6", 0);

    }
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