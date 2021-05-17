import React from 'react'
import PledgeChoice from './PledgeChoice'

export default function DefaultModal({items}) {
    return (
        <div>
            <button>X</button>
            <h3>Back this project</h3>
            <p>
                Want to support us in bringing Mastercraft 
                Bamboo Monitor Riser out in the world?
            </p>
            <div className="pledge-choice">
                <input type="radio" value="none" />
                <h4>Pledge with no reward</h4>
                <p>Choose to support us without a reward if you simply believe in our project. As a backer, 
                you will be signed up to receive product updates via email.</p>
            </div>
            {items.map(item => {
                return <PledgeChoice item={item} />
            })}
        </div>
    )
}
