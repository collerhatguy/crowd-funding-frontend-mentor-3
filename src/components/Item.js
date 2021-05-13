import React from 'react'

export default function Item({item}) {
    return (
        <div className="item-card"
            style={{
                opacity: item.quantity ? "1" : ".6",
            }}>
            <div className="item-header">
                <h3>{item.title}</h3>
                <span>Pledge ${item.cost} or more</span>
            </div>
            <p>{item.description}</p>
            <div className="item-bottom">
                <aside><span>{item.quantity}</span> left</aside>
                <button
                    style={{
                        display: item.quantity ? "block" : "none" ,
                    }}>
                    Select Reward
                </button>
                <button
                    style={{
                        display: item.quantity ? "none" : "block",
                        backgroundColor: "hsl(0, 0%, 48%)",
                    }}>
                    Out of stock
                </button>
            </div>
        </div>
    )
}
