import React, {useState} from 'react'

export default function PledgeChoice({item}) {
    const [pledge, setPledge] = useState(false)
    return (
        <div className="pledge-choice">
            <label 
                className={pledge ? "highlight" : ""}
                for={`${item.title}`}>
                <input 
                    onClick={() => setPledge(!pledge)}
                    type="checkbox"
                    value={item.title} 
                    id={`${item.title}`}/>
                <span>{item.title}</span> Pledge ${item.cost} or more
            </label>
            <aside><span>{item.quantity}</span> left</aside>
            <p>{item.description}</p>
            <div 
                style={pledge ? {} : {display: "none"}}
                className="pledge-input">
                <span>Enter your pledge</span>
                <input type="number" min={item.cost} />
                <button>Continue</button>
            </div>
        </div>
    )
}
