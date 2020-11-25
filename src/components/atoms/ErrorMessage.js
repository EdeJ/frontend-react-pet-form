import React from 'react'

export const ErrorMessage = ({ children }) => {
    return (
        <p style={{ backgroundColor: "red", color: "white", fontWeight: 600 }}>
            {children}
        </p>
    )
}

