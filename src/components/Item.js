import React from 'react'

export default function Item({item}) {
    return (
        <div className="item-card">
            <div className="item-header">

                <h3>{item.title}</h3>
                <span>Pledge ${item.cost} or more</span>
            </div>
            <p>{item.description}</p>
            <div className="item-bottom">
                <aside><span>{item.quantity}</span> left</aside>
                <button>Select Reward</button>
            </div>
        </div>
    )
}
