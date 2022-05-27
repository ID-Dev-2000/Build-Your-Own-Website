// Elements to input user data
let inputDiv = document.getElementById('inputDiv')
let inputWebsiteName = document.getElementById('inputWebsiteName')
let inputBodyText = document.getElementById('inputBodyText')
let submitDataButton = document.getElementById('submitDataButton')

// Elements to display data from user input
let userContentDiv = document.getElementById('userContentDiv')
let userWebsiteName = document.getElementById('userWebsiteName')
let userBodyText = document.getElementById('userBodyText')
let resetPageButton = document.getElementById('resetPageButton')

// Event listeners to display new page from user data, reset page to default, 
inputBodyText.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        displayNewPage()
    }
})
submitDataButton.addEventListener("click", displayNewPage)
resetPageButton.addEventListener("click", resetPageToDefault)

// Hides the div element that will display user data
userContentDiv.style.display = "none"

// All functions below
function updatePageWithUserData() {
    userWebsiteName.innerHTML = inputWebsiteName.value
    userBodyText.innerHTML = inputBodyText.value
}

function resetPageToDefault() {
    inputDiv.style.display = ""
    userContentDiv.style.display = "none"
}

function displayNewPage() {
    if (inputWebsiteName.value == '' || inputBodyText == '') {
        resetPageToDefault()
    } else {
        updatePageWithUserData()
        inputDiv.style.display = "none"
        userContentDiv.style.display = ""
    }
}
