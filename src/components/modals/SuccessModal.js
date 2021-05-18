import React from 'react'
import ReactDOM from "react-dom";

export default function SuccessModal({success, done}) {
    return ReactDOM.createPortal(
        <div style={success ? {} : {display: "none"}}>
            <div 
                className="success-modal"
                >
                <img src="/images/icon-check.svg" />
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
