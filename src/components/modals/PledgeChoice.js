import React from 'react'

export default function PledgeChoice({item}) {
    return (
        <div className="pledge-choice">
            <input type="radio" value={item.title} />
            <h4>{item.title} Pledge ${item.cost} or more</h4>
            <aside><span>{item.quantity}</span> left</aside>
            <p>{item.description}</p>
            <div className="pledge-input">
                <span>Enter your pledge</span>
                <input type="number" min={item.cost} />
                <button>Continue</button>
            </div>
        </div>
    )
}
