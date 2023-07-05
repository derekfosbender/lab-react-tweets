import React from 'react'

export default function User({userData: {name, handle}}) {
    return (
        <span className="user">
            <span className ="name">{name}</span>
            <span className ="handle">@{handle}</span>
        </span>
    )
}