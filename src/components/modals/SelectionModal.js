import React from 'react';
import ReactDOM from "react-dom";
import PledgeChoice from './PledgeChoice'

export default function SelectionModal({items, selection, setSelection, success}) {
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
                <div className="pledge-choice">
                    <label for={`no-reward`}>
                        <input type="checkbox" value="none" id="no-reward" />
                        Pledge with no reward
                    </label>
                    <p>Choose to support us without a reward if you simply believe in our project. As a backer, 
                    you will be signed up to receive product updates via email.</p>
                </div>
                {items.map(item => {
                    return <PledgeChoice item={item} success={success} setSelection={setSelection} />
                })}
            </div>
            <div id="background" />
        </div>,
        document.getElementById("portal")
    )
}
