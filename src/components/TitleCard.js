import React, { useState } from 'react';
import masterImg from "../images/logo-mastercraft.svg";
import bookmarkImg from "../images/icon-bookmark.svg";

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
            <img id="master-picture" src={masterImg} />
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
                        id="bookmark-image" 
                        src={bookmarkImg} />
                    {bookMarked ? "Bookmarked" : "Bookmark"}
                </button>
            </div>
        </div>
    )
}
