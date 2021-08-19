import { useRef } from "react"
import React from 'react'

export default function Item(props) {
    const { item, setSelection } = props;
    return (
        <div className={`item-card ${!item.quantity && "opacity"}`}>
            <div className="item-header">
                <h3>{item.title}</h3>
                <span>Pledge ${item.cost} or more</span>
            </div>
            <p>{item.description}</p>
            <div className="item-bottom">
                <aside><span>{item.quantity}</span> left</aside>
                <button
                    disabled={!item.quantity}
                    onClick={setSelection}>
                    {item.quantity ? "Select Reward" : "Out of stock"}
                </button>
            </div>
        </div>
    )
}
