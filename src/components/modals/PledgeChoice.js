import React, {useState, useEffect} from 'react'

export default function PledgeChoice({
    item, 
    success, 
    setSelection, 
    setMoneyRaised
}) {

    const [pledge, setPledge] = useState(false);
    const [valid, setValid] = useState(true)
    const [moneyOffered, setMoneyOffered] = useState(0);
    useEffect(() => {
        typeof moneyOffered !== Number ? setValid(false) : setValid(true);
    }, [moneyOffered])
    const submit = () => {
        success()
        setSelection(false);
        setMoneyRaised(prevMoney => prevMoney + moneyOffered);
    }
    return (
        <div 
            style={{
                borderColor: pledge ? "hsl(176, 50%, 47%)" : "",
                opacity: item.quantity ? "" : "0.5",
        }}
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
            {pledge && 
                <div className="pledge-input">
                    <span>Enter your pledge</span>
                    <input 
                        type="number" 
                        min={item.cost} 
                        onChange={(e) => setMoneyOffered(parseInt(e.target.value))}
                    />
                    <button
                        onClick={submit}
                    >Continue</button>
                </div>
            }
        </div>
    )
}
