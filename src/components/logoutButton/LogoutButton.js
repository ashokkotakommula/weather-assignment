import React, { Fragment } from 'react'

export default function LogoutButton({onLogout}) {
    return (
        <Fragment>
            <button  className="log-out" onClick={onLogout}>Logout</button>
        </Fragment>
    )
}
