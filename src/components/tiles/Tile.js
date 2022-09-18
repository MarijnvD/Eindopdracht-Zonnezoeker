import React from 'react';
import './Tile.css';

function Tile({title, children, rowspan, colspan}) {

    return (
        <section className={"tile rowspan" + rowspan + " colspan" + colspan}>
            <h3 className="topBar">{title}</h3>
            <article className="content">{children}</article>
        </section>
    );
}

export default Tile;