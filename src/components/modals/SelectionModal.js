import React from 'react';
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import PledgeChoice from './PledgeChoice';
import PledgeNoReward from "./PledgeNoReward";
import { revealSelection, revealSuccess } from "../../actions"

function SelectionModal(props) {
    const { items, revealSelection, revealSuccess } = props;
    return ReactDOM.createPortal(
        <div>
            <div 
                className="selection-modal">
                <button
                    id="exit-btn" 
                    onClick={revealSelection}>X</button>
                <h3>Back this project</h3>
                <p>
                    Want to support us in bringing Mastercraft 
                    Bamboo Monitor Riser out in the world?
                </p>
                <PledgeNoReward 
                    revealSuccess={revealSuccess} 
                    revealSelection={revealSelection} 
                />
                {items.map(item => 
                    <PledgeChoice 
                        item={item} 
                        revealSuccess={revealSuccess} 
                        revealSelection={revealSelection} 
                    />
                )}
            </div>
            <div className="background" />
        </div>,
        document.getElementById("portal")
    )
}

const mapStateToProps = (state) => ({
    revealSuccess: state.revealSuccess, 
})

export default connect(mapStateToProps, { revealSelection, revealSuccess })(SelectionModal)