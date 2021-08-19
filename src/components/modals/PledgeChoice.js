import React, { useState } from 'react';
import { connect } from 'react-redux';
import { donateMoney } from "../../actions";

function PledgeChoice(props) {
    const { item, success, setSelection, donateMoney } = props;
    const [pledge, setPledge] = useState(false);
    const [moneyOffered, setMoneyOffered] = useState(0);

    const submit = () => {
        success()
        setSelection(false);
        donateMoney(moneyOffered)
    }

    const { quantity, title, cost, description } = item;

    const handleChange = e => setMoneyOffered(parseInt(e.target.value));

    return (
        <div 
            className={`
                pledge-choice 
                ${!quantity && "opacity"}
                ${pledge && "pledge"}    
            `}>
            <div className="pledge-header">
                <label 
                    className={pledge && "highlight"}
                    for={title}>
                    <input 
                        onClick={() => setPledge(!pledge)}
                        type="checkbox"
                        value={title} 
                        id={title}/>
                    <span>{title}</span> Pledge ${cost} or more
                </label>
                <aside><span>{quantity}</span> left</aside>
            </div>
            <p>{description}</p>
            {pledge && 
                <div className="pledge-input">
                    <span>Enter your pledge</span>
                    <input 
                        type="number" 
                        min={cost} 
                        onChange={handleChange}
                    />
                    <button
                        onClick={submit}
                    >Continue</button>
                </div>
            }
        </div>
    )
}
export default connect(null, { donateMoney })(PledgeChoice)