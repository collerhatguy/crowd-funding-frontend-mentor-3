import React from 'react'
import reactDom from 'react-dom'

export default function BackDrop({visible}) {
    return reactDom.createPortal(
        <div
            style={{display: visible ? "block" : "none"}}
            className="background"></div>,
        document.getElementById("portal")
    )
}
