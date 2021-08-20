import React, {useState} from 'react'

export default function PledgeNoReward(props) {
    const { revealSuccess, revealSelection } = props;
    const [pledge, setPledge] = useState(false);
    
    const submit = () => {
        revealSuccess();
        revealSelection();
    }
    
    return (
        <div 
            className={`
                pledge-choice 
                opacity
                ${pledge && "pledge"}    
            `}>
            <label for={`no-reward`}>
                <input 
                    onClick={() => setPledge(!pledge)}
                    type="checkbox" 
                    value="none" 
                    id="no-reward" />
                <span>Pledge with no reward</span>
            </label>
            <p>Choose to support us without a reward if you simply believe in our project. As a backer, 
            you will be signed up to receive product updates via email.</p>
            {pledge &&
                <div
                    className="pledge-input">
                    <button
                        style={{
                            marginLeft: "50%",
                        }}
                        onClick={submit}
                    >Continue</button>
                </div>
            }
        </div>
    )
}
