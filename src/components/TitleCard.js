import React from 'react'

export default function TitleCard() {
    return (
        <div className="title-card">
            <img className="master-picture" src="/images/logo-mastercraft.svg" />
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>
                A beautiful and handcrafted monitor stand to reduce neck and eye strain.
            </p>
            <div className="btns-container">
                <button>Back this project</button>
                <button>
                    <img className="bookmark-picture" src="/images/icon-bookmark.svg" />
                    Bookmark
                </button>
            </div>
        </div>
    )
}
