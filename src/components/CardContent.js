import React from 'react';
import Buttons from  './Buttons';
import CardInfo from './CardInfo';

function CardContent() {
    return (
        <div className="card__content">
            <h1 className="card__primary-heading">Johnny Estrada</h1>
            <h2 className="card__secondary-heading">Frontend Engineer</h2>
            <p className="card__text">johnnye@yahoo.com</p>
            <Buttons />
            <CardInfo />
        </div>
    )
}

export default CardContent;