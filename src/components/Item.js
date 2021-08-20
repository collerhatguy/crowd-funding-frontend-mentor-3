
import React from 'react';
import { connect } from 'react-redux';
import { revealSelection } from "../actions";

function Item(props) {
    const { item, revealSelection } = props;
    const { quantity, cost, description, title } = item;
    return (
        <div className={`item-card ${!quantity && "opacity"}`}>
            <div className="item-header">
                <h3>{title}</h3>
                <span>Pledge ${cost} or more</span>
            </div>
            <p>{description}</p>
            <div className="item-bottom">
                <aside><span>{quantity}</span> left</aside>
                <button
                    disabled={!quantity}
                    onClick={revealSelection}>
                    {quantity ? "Select Reward" : "Out of stock"}
                </button>
            </div>
        </div>
    )
}

export default connect(null, { revealSelection })(Item)