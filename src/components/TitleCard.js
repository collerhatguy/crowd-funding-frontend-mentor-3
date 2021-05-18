import React, { useState } from 'react'

export default function TitleCard({setBackers}) {
    const [bookMarked, setBookMarked] = useState(false)
    const [backed, setBacked] = useState(false)
    const style = bookMarked ? {color: "hsl(176, 72%, 28%)"} : {};
    const handleBackingButton = () => {
        backed ? setBackers(prevBacker => prevBacker - 1) : setBackers(prevBacker => prevBacker + 1);
        setBacked(!backed);
    }

    return (
        <div className="title-card">
            <img className="master-picture" src="/images/logo-mastercraft.svg" />
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>
                A beautiful and handcrafted monitor stand to reduce neck and eye strain.
            </p>
            <div className="btns-container">
                <button
                    onClick={() => handleBackingButton()}
                    >{backed ? "Unback this project?" : "Back this project?"}</button>
                <button 
                    onClick={() => setBookMarked(!bookMarked)}
                    style={style}>
                    <img 
                        className={`bookmark-picture`} 
                        src="/images/icon-bookmark.svg" />
                    {bookMarked ? "Bookmarked" : "Bookmark"}
                </button>
            </div>
        </div>
    )
}
