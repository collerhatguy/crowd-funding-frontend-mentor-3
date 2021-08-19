import React from 'react';
import ReactDOM from "react-dom";
import PledgeChoice from './PledgeChoice';
import PledgeNoReward from "./PledgeNoReward";

export default function SelectionModal(props) {
    const { items, setSelection, success } = props;
    return ReactDOM.createPortal(
        <div>
            <div 
                className="selection-modal">
                <button
                    id="exit-btn" 
                    onClick={setSelection}>X</button>
                <h3>Back this project</h3>
                <p>
                    Want to support us in bringing Mastercraft 
                    Bamboo Monitor Riser out in the world?
                </p>
                <PledgeNoReward 
                    success={success} 
                    setSelection={setSelection} 
                />
                {items.map(item => 
                    <PledgeChoice 
                        item={item} 
                        success={success} 
                        setSelection={setSelection} 
                    />
                )}
            </div>
            <div className="background" />
        </div>,
        document.getElementById("portal")
    )
}
