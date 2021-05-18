import React, {useState} from 'react'

export default function PledgeNoReward({success, setSelection}) {
    const [pledge, setPledge] = useState(false);
    const submit = () => {
        success();
        setSelection(false);
    }
    return (
        <div 
            className="pledge-choice"
            style={pledge ? {borderColor: "hsl(176, 50%, 47%)"} : {}}>
            <label for={`no-reward`}>
                <input 
                    onClick={() => setPledge(!pledge)}
                    type="checkbox" 
                    value="none" 
                    id="no-reward" />
                Pledge with no reward
            </label>
            <p>Choose to support us without a reward if you simply believe in our project. As a backer, 
            you will be signed up to receive product updates via email.</p>
            <div 
                style={pledge ? {} : {display: "none"}}
                className="pledge-input">
                <button
                    style={{
                        marginLeft: "50%",
                    }}
                    onClick={() => submit()}
                >Continue</button>
            </div>
        </div>
    )
}
