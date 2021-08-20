import React from 'react'
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import successImg from "../../images/icon-check.svg";
import { revealSuccess } from "../../actions"

function SuccessModal(props) {
    const { revealSuccess } = props;
    return ReactDOM.createPortal(
        <div>
            <div 
                className="success-modal"
                >
                <img src={successImg} alt={`${successImg}`}/>
                <h3>Thanks for your support!</h3>
                <p>
                    Your pledge brings us one step closer to 
                    sharing Mastercraft Bamboo Monitor Riser 
                    worldwide. You will get an email once our 
                    campaign is completed.
                </p>
                <button
                    onClick={revealSuccess}
                >Got it!</button>
            </div>
            <div className="background" />
        </div>,
        document.getElementById("portal")
    )
}

export default connect(null, { revealSuccess })(SuccessModal)
