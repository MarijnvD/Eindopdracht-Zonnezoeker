import React from 'react';
import './Tile.css';

function RatingTile({title, children, rowspan, colspan}) {

    return (
        <div className={"tile rowspan" + rowspan + " colspan" + colspan}>
            <div className="topBar">{title}</div>
            <div className="RatingContent">{children}</div>
        </div>
    );
}

export default RatingTile;
