import React, { Fragment } from 'react'

export default function FromContainer({onLogin, username, password, onUsernameChange, onPasswordChange}) {
    return (
        <Fragment>
            <form onSubmit={onLogin}>
                    <input type="text" value={username} onChange={onUsernameChange} placeholder="Username"/>
                    <input type="password" value={password} onChange={onPasswordChange} placeholder="Password"/>
                    <button onClick={onLogin}>Login</button>
                </form>
        </Fragment>
    )
}
