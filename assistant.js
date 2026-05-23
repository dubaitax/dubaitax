function sendMessage(){

    let input =
        document.getElementById("userInput");

    let message = input.value;

    if(message === ""){

        return;
    }

    let chatBox =
        document.getElementById("chatBox");



    chatBox.innerHTML +=
        `
        <div class="user">
            ${message}
        </div>
        `;



    let reply = "";



    if(message.toLowerCase().includes("vat")){

        reply =
            "UAE VAT Rate is 5%";
    }

    else if(
        message.toLowerCase().includes("corporate")
    ){

        reply =
            "Corporate Tax is 9% above AED 375,000";
    }

    else{

        reply =
            "Please ask about UAE Tax or VAT.";
    }



    chatBox.innerHTML +=
        `
        <div class="bot">
            ${reply}
        </div>
        `;

    input.value = "";
}
