import React, {useState} from 'react'

export default function PledgeChoice({item, success, setSelection}) {

    const [pledge, setPledge] = useState(false);
    const submit = () => {
        success()
        setSelection(false);
    }
    return (
        <div 
            style={pledge ? {borderColor: "hsl(176, 50%, 47%)"} : {}}
            className="pledge-choice">
            <div className="pledge-header">
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
            </div>
            <p>{item.description}</p>
            <div 
                style={pledge ? {} : {display: "none"}}
                className="pledge-input">
                <span>Enter your pledge</span>
                <input type="number" min={item.cost} />
                <button
                    onClick={() => submit()}
                >Continue</button>
            </div>
        </div>
    )
}
