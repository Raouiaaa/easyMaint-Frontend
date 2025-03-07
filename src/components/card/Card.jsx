import React from 'react'
import './card.css'

function Card(props) {
    const { className, title, total, style } = props;
    return (
        <div className={`card ${className}`} style={style}>
            <div className="card-title container">
                <h6>
                    {title} <br /> All assets & All Groups
                </h6>
            </div>
            <div className="card-body body-container">
                <p className="card-text">
                    {total}<br />
                </p>
            </div>
        </div>
    )
}

export default Card