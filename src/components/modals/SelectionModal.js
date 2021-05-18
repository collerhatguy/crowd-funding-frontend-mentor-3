import React from 'react';
import ReactDOM from "react-dom";
import PledgeChoice from './PledgeChoice';
import PledgeNoReward from "./PledgeNoReward";

export default function SelectionModal({
    items, 
    selection, 
    setSelection, 
    success, 
    setMoneyRaised, 
    setBackers
}) {

    return ReactDOM.createPortal(
        <div style={selection ? {} : {display: 'none'}}>
            <div 
                className="selection-modal">
                <button
                    id="exit-btn" 
                    onClick={() => setSelection()}>X</button>
                <h3>Back this project</h3>
                <p>
                    Want to support us in bringing Mastercraft 
                    Bamboo Monitor Riser out in the world?
                </p>
                <PledgeNoReward 
                    success={success} 
                    setSelection={setSelection} 
                />
                {items.map(item => {
                    return <PledgeChoice 
                                item={item} 
                                success={success} 
                                setSelection={setSelection} 
                                setBackers={setBackers}
                                setMoneyRaised={setMoneyRaised}
                            />
                })}
            </div>
            <div className="background" />
        </div>,
        document.getElementById("portal")
    )
}
