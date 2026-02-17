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


const agentReviewPanel = document.getElementById('agentReviewPanel');
const displayName = document.getElementById('displayName')
const displayAddress = document.getElementById('displayAddress')
const displayType = document.getElementById('displayType')
const emptyInputAlert = document.getElementById('emptyInputAlert')
const btnAccept = document.getElementById('btn-accept')
const btnReject = document.getElementById('btn-reject')

function submit(){
    if (inputName.value == "" || inputAddress.value == "" || inputType.value == "select") {
        emptyInputAlert.style.display = "block"
    } else {
        emptyInputAlert.style.display = "none"
        agentReviewPanel.style.display = "block"

        displayName.innerText = inputName.value
        displayAddress.innerText = inputAddress.value
        displayType.innerText = inputType.value
        intakeFormSection.style.display = "block"
        incomingCallAlert.innerText = "Form Received"
        
        
        btnAccept.style.display = "none"
        btnReject.style.display = "none"
        
        inputName.value = ''
        inputAddress.value = ''
        inputType.value = 'select'
    }
}

const feedbackSection = document.getElementById('feedbackSection')

function approve() {
    intakeFormSection.innerHTML = ""
    intakeFormSection.innerHTML = `<p class="alert alert-success text-center fw-bold text-black">Your emergency has been approved, kindly wait till we reach you.</p>`
    agentReviewPanel.style.display = "none"
    feedbackSection.style.display = "block"
}

function pending() {
    agentReviewPanel.style.display = "none"
    intakeFormSection.innerHTML = ""
    intakeFormSection.innerHTML = `<p class="alert alert-success text-center fw-bold text-black">Your emergency is on pending</p>`
}

function deny() {
    agentReviewPanel.style.display = "none"
    intakeFormSection.innerHTML = `<p class="alert alert-success text-center fw-bold text-black">Rejected</p>`
}

function btnRestart(){
    intakeFormSection.innerHTML = ""
    feedbackSection.style.display = "none"
    incomingCallAlert.innerText = "Reload your page"
}