import React, { Fragment } from 'react'

export default function Errors({errors}) {
    return (
        <Fragment>
            <p className="error">{errors}</p>
        </Fragment>
    )
}
