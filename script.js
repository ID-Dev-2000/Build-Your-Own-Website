// Elements to input user data
let inputDiv = document.getElementById('inputDiv')
let inputBodyText = document.getElementById('inputBodyText')
let submitDataButton = document.getElementById('submitDataButton')
let htmlInstructions = document.getElementById('htmlInstructions')

// Elements to display data from user input
let userContentDiv = document.getElementById('userContentDiv')
let userBodyText = document.getElementById('userBodyText')
let resetPageButton = document.getElementById('resetPageButton')

// Event listeners to display new page from user data, reset page to default
submitDataButton.addEventListener("click", displayNewPage)
resetPageButton.addEventListener("click", resetPageToDefault)

// Hides the div element that will display user data
userContentDiv.style.display = "none"

// All functions below
function updatePageWithUserData() {
    userBodyText.innerHTML = inputBodyText.value
}

function resetPageToDefault() {
    inputDiv.style.display = ""
    htmlInstructions.style.display = ""
    userContentDiv.style.display = "none"
}

function displayNewPage() {
    if (inputBodyText.value == '') {
        resetPageToDefault()
    } else {
        updatePageWithUserData()
        inputDiv.style.display = "none"
        htmlInstructions.style.display = "none"
        userContentDiv.style.display = ""
    }
}
