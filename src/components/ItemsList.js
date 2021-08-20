import React from 'react';
import Item from "./Item";
import SelectionModal from "./modals/SelectionModal";
import SuccessModal from "./modals/SuccessModal";
import items from "../items";
import { connect } from 'react-redux';

function ItemsList(props) {
    const { success, selection } = props;
    return (
        <div className="item-list">
            {items.map(item => 
                <Item item={item}/>
            )}
            {selection && <SelectionModal items={items}/>
            }
            {success && <SuccessModal/>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    success: state.revealSuccess,
    selection: state.revealSelection
})

export default connect(mapStateToProps)(ItemsList); 
