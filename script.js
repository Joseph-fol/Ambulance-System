const inputName = document.getElementById("inputName")
const inputAddress = document.getElementById('inputAddress')
const inputType = document.getElementById('inputType')
const ringingTone = new Audio('marimba-ringtone.wav')


function btnDial() {
    ringingTone.play();

    const incomingCallAlert = document.getElementById("incomingCallAlert")
    incomingCallAlert.style.display = "block"
}
const userEndNotification = document.getElementById("userEndNotification")

const intakeFormSection = document.getElementById("intakeFormSection")
function pickUp() {
    ringingTone.pause();
    intakeFormSection.style.display = "block"
    incomingCallAlert.innerText = "Emergency Intake Form Sent"
    incomingCallAlert.style.display = "block"
    userEndNotification.style.display = "none"
}


function reject() {
    ringingTone.pause();
    userEndNotification.style.display = "block"
    incomingCallAlert.innerText = "You have rejected the call"
    incomingCallAlert.style.display = "none"
}

userEndNotification.style.display = "none"


function submit(){
    const agentReviewPanel = document.getElementById('agentReviewPanel');
    const displayName = document.getElementById('displayName')
    const displayAddress = document.getElementById('displayAddress')
    const displayType = document.getElementById('displayType')

    if (displayName == "" || displayAddress == "" || displayType == "select") {
        alert("Input cannot be empty!!")
        agentReviewPanel.style.display = "none"
    } else {
        displayName.innerText = inputName.value
        displayAddress.innerText = inputAddress.value
        displayType.innerText = inputType.value
        agentReviewPanel.style.display = "block"
        incomingCallAlert.innerText = "Form Received"
        
    }

    inputName.value = ''
    inputAddress.value = ''
    inputType.value = ''
    intakeFormSection.innerHTML = `<p class="text-info text-center">Wait for response</p>`
}

function approve() {
    intakeFormSection.innerHTML = ""
    intakeFormSection.innerHTML = `<p class="alert alert-success text-center fw-bold text-black">Your emergency has been approved, kindly wait till we reach you.</p>`
    // intakeFormSection.innerHTML = ""
}

function pending() {
    intakeFormSection.innerHTML = ""
    intakeFormSection.innerHTML = `<p class="alert alert-success text-center fw-bold text-black">Your emergency is on pending</p>`
}

function deny() {
    alert("Call Denied!!")
}