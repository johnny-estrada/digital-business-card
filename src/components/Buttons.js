import React from 'react';
import envelope from '../images/envelope-solid.svg';
import linkedin from '../images/linkedin.svg';

function Buttons() {
    return (
        <div className="card__cta-container">
            <button className="btn-secondary">
                <img src={envelope} width="16px" height="16px" alt='Email' />Email
            </button>
            <button className="btn-primary" src="./images/linkedin.svg">
                <img src={linkedin} width="16px" height="16px" alt='LinkedIn' />LinkedIn
            </button>
        </div>
    )
}

export default Buttons;