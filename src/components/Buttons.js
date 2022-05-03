import React from "react";

function Buttons({buttonText, disabled}) {
    let buttonState = false;
    if (disabled) {
        buttonState = true;
    }
    return (
        <button type="button" disabled={buttonState} onClick={printButtonText}>{buttonText}</button>
    )
}

export default Buttons;

function printButtonText(e) {
    console.log(e.target.innerText);
}