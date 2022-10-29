import React from 'react';
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import github from "../images/github.svg";

function Footer() {
    return (
        <footer className="footer">
            <button className="footer__btn">
                <img  src={twitter} width="20px" height="20px" alt='Twiiter' />
            </button>
            <button className="footer__btn">
                <img className="facebook-icon" src={facebook} width="20px" height="20px" alt='Facebook' />
            </button>
            <button className="footer__btn">
                <img  src={instagram} width="20px" height="20px" alt='Instagram' />
            </button>
            <button className="footer__btn">
                <img  src={github} width="20px" height="20px" alt='Github' />
            </button>
        </footer>
    )
}

export default Footer;