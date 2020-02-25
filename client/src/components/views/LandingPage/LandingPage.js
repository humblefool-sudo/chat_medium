import React from 'react'
import { FaCode } from "react-icons/fa";

function LandingPage() {
    return (
        <>
        <div className="app">
            <FaCode style={{ fontSize: '4rem' }} /><br />
            <span style={{ fontSize: '2rem' }}>Click Chat to Start</span>
        </div>
        <div style={{ float:'right' }}>Let's Chat</div>
        </>
    )
}

export default LandingPage
