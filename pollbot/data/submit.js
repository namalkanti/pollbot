var instrospectiveLine = "It's an interesting question and one that deserves a lot of thought. I can not do it justice with such a small response";

function detectMainPage() {
    hasPie = false;
    hasWondering = false;
    if (3 <= $('div:contains("pie")').length){
        hasPie = true;
    }
    if (3 <= $('div:contains("wondering")').length){
        hasWondering = true;
    }
    return hasPie && hasWondering
}

function detectMultipleChoice() {
    if (3 <= $("button").length){
        return true;
    }
    else {
        return false;
    }
}

function submitMultipleChoice() {
  $("button")[0].click();
}

function submitText() {
}

function detectAndSubmit(){
    if(detectMainPage()){
        console.log("Found main page");
    }

    if (detectMultipleChoice()){
        console.log("Found multiple choice");
        submitMultipleChoice();
    }

    if (detectTextArea()) {
        console.log("Found text area");
        submitText();
    }
}


