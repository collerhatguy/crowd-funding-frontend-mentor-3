import React, { useState } from 'react';
import masterImg from "../images/logo-mastercraft.svg";
import bookmarkImg from "../images/icon-bookmark.svg";
import { connect } from 'react-redux';
import { backProject } from "../actions";

function TitleCard(props) {
    const { backProject, backed } = props;
    const [bookMarked, setBookMarked] = useState(false);

    const handleBookmark = () => setBookMarked(!bookMarked);

    return (
        <section className="title-card">
            <img 
                id="master-picture" 
                src={masterImg} 
                alt={`${masterImg}`} 
            />
            <h2>
                Mastercraft Bamboo Monitor Riser
            </h2>
            <p>
                A beautiful and handcrafted monitor stand to reduce neck and eye strain.
            </p>
            <div className="btns-container">
                <button onClick={backProject}>
                    {backed ? "Unback this project?" : "Back this project?"}
                </button>
                <button 
                    onClick={handleBookmark}
                    className={bookMarked && "bookmarked"}>
                    <img 
                        id="bookmark-image" 
                        src={bookmarkImg} 
                    />
                    <span>  
                        {bookMarked ? "Bookmarked" : "Bookmark"}
                    </span>
                </button>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({
    backed: state.backed
})
  
export default connect(mapStateToProps, { backProject })(TitleCard)