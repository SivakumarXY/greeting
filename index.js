const getInputvalue = document.getElementById("getInputvalue")
const getButton = document.getElementById("getButton")
const response = document.getElementById("response")
const getSpan = document.getElementById("getSpan")





getButton.addEventListener("click", (evt) => {

    evt.preventDefault()




    response.innerText = getInputvalue.value;

    let regulrExpression = /^[a-zA-Z]+$/


    if (regulrExpression.test(getInputvalue.value) == false) {


        getSpan.style.display = "block"
        getInputvalue.style.border = "3px solid red"
        response.style.display = "none"


    } else {

        getSpan.style.display = "none"
        getInputvalue.style.border = "none"
        response.style.display = "block"


    }



    getInputvalue.value = "";



})