import React from 'react';
import './Tile.css';

function Tile({title, children, rowspan, colspan}) {

    return (
        <div className={"tile rowspan" + rowspan + " colspan" + colspan}>
            <div className="topBar">{title}</div>
            <div className="content">{children}</div>
        </div>
    );
}

export default Tile;