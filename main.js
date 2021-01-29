const amountOwed = document.getElementById('amountOwed')
const calculate = document.getElementById("calculate")
const payBtn = document.getElementsByClassName("payBtn")
let currentCatTax = 0;

// TODO: calcButtonClick function
// Function should handle the following items:
// 1) Generate a random, whole number between 0 and 20.
// 2) If the random number is not 0, update the amountOwed div to display "You owe {random number} cat tax! Pay up!"
// 3) If the random number is not 0, update the pay button text to display "Pay Cat Tax"
// 4) If the random number is not 0, update the pay button so that it is no longer hidden
// 5) If the random number is 0, update the amountOwed div to display "You owe {random number} cat tax! You've escaped this time!"
// 6) If the random number is 0, update the pay button so that it is hidden.
// 7) Both the amountOwed and pay amount button should be updated every time the calculate cat tax button is clicked.

function calcButtonClick() {
    let amount = Math.floor(Math.random() * Math.floor(20)) + 1;
    document.addEventListener("click", (e) => {
        let button = e.target
        if(amount !== 0 && button.id === "calculate"){
            calculate.style.visibility = "visible"
            amountOwed.innerText = `You owe ${amount} cat tax! Pay up!`
        } else if(amount === 0 && button.id === "calculate"){
            calculate.style.visibility = "hidden"
            amountOwed.innerText = `You owe ${amount} cat tax! You've escaped this time!`
        }
    })
    payButton(amount)
}

// TODO: payButton function
// Function should handle the following items:
// 1) Decrement the currentCatTax amount by 1
// 2) If the remaining cat tax is greater than zero, update the amountOwed div to display "You still owe {remaining amount} cat tax! Pay up!"
// 3) If the remaining cat tax is zero or fewer, update the amountOwed div to display "Your debts are paid..."
// 4) If the cat tax was payable (amount was greater than 0) when the button was clicked, make a call to the cat api to get a cat image (https://api.thecatapi.com/v1/images/search)
// 5) Once the cat image is retrieved, append the image to the image container
// 6) If the cat wax was not payable (amount was less than or equal to 0) when the button was clicked, replace the entire contents of the container with the gif found here (https://gfycat.com/snivelingbeautifuljoey-cat)

function payButton(amount) {
    console.log("Hello", amount)
    document.addEventListener("click", (e) => {
        let button = e.target
        if(amount >= 0){
            fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => res.json())
            .then(data => renderData(data, amount, button))
        }
    })
}

function renderData(data, amount, button){
    const images = document.getElementById("imageContainer")
    console.log("Inside render")
    if(amount >= 0 && button.className === "payBtn"){
        // subtractAmount(amount)
        let x = document.createElement("img")
        x.src = `${data[0].url}`
        x.width = 300
        x.height = 300
        console.log(x)
        images.append(x)
        recalculateTax()
    }
}

function subtractAmount(amount){
    amount -= 1
    console.log("hi", amountOwed)
    amountOwed.innerText = `You owe ${amount} cat tax! Pay up!`
}


calcButtonClick()
// payButton()