import React from 'react';
import CardContent from './CardContent';
import Footer from './Footer';
import avatar from '../images/avatar.jpg';

function Card() {
    return (
        <div className="card">
            <img className="card__img" src={avatar} width="317px" height="317" alt='Avatar' />     
            <CardContent />
            <Footer />
        </div>
    )
};

export default Card;