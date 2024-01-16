import React from "react"

const Title = ({ children }) => {

    return(
            <div className="d-flex flex-column justify-content-lg-end">
                <h1 className="text-light text-end">{children}</h1>
                <h3 className="mb-4 text-end text-secondary">Micro-Logic</h3>
            </div>
    )
}

export default Title