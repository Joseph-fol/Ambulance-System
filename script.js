const inputName = document.getElementById("inputName")
const inputAddress = document.getElementById('inputAddress')
const inputType = document.getElementById('inputType')


function btnDial() {
    const incomingCallAlert = document.getElementById("incomingCallAlert")
    incomingCallAlert.style.display = "block"
}

const intakeFormSection = document.getElementById("intakeFormSection")

function pickUp() {
    intakeFormSection.style.display = "block"
    incomingCallAlert.innerText = "Emergency Intake Form Sent"
}


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
    intakeFormSection.innerText = `Wait for response`
}