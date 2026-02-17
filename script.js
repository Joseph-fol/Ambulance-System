const inputName = document.getElementById("inputName").value
const inputAddress = document.getElementById('inputAddress').value
const inputType = document.getElementById('inputType').value

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


const agentReviewPanel = document.getElementById('agentReviewPanel');
const displayName = document.getElementById('displayName')
const displayAddress = document.getElementById('displayAddress')
const displayType = document.getElementById('displayType')

function submit(){
    if (inputName == "" || inputAddress == "" || inputType == "select") {
        emptyInputAlert.style.display = "block"
    } else {
        emptyInputAlert.style.display = "block"
        agentReviewPanel.style.display = "block"
        displayName.innerText = inputName.value
        displayAddress.innerText = inputAddress.value
        displayType.innerText = inputType.value
        incomingCallAlert.innerText = "Form Received"
    }

    inputName.value = ''
    inputAddress.value = ''
    inputType.value = ''
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
    intakeFormSection.innerHTML = `<p class="alert alert-success text-center fw-bold text-black">Rejected</p>`
}