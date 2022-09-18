import React from 'react';
import './Footer.css';

function Footer({title, copyright, name, description}) {

    return (
        <footer className="footer">

            <h4>{title}</h4>

            <p>{description}</p>
            <p>{name}</p>

            <div className="separator"/>

            <p><strong>{copyright}</strong></p>

        </footer>
    );
}

export default Footer;