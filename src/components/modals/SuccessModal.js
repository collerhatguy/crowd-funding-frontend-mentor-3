import React from 'react'
import ReactDOM from "react-dom";
import successImg from "../../images/icon-check.svg";

export default function SuccessModal({ done }) {
    return ReactDOM.createPortal(
        <div>
            <div 
                className="success-modal"
                >
                <img src={successImg} />
                <h3>Thanks for your support!</h3>
                <p>
                    Your pledge brings us one step closer to 
                    sharing Mastercraft Bamboo Monitor Riser 
                    worldwide. You will get an email once our 
                    campaign is completed.
                </p>
                <button
                    onClick={() => done()}
                >Got it!</button>
            </div>
            <div className="background" />
        </div>,
        document.getElementById("portal")
    )
}
