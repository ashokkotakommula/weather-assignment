import React, { Fragment } from 'react'

export default function AboutUs({changeAboutus, isOpen}) {
    return (
        <Fragment>
             <div className="about-us">
                <button onClick={changeAboutus}>About Us</button>
            </div>
            <div className={isOpen ? "open" : "close"}>
                <h2>About Us</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </Fragment>
    )
}
