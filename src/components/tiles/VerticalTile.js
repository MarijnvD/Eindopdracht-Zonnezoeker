import React from 'react';
import './VerticalTile.css';

function VerticalTile({children}) {

    return (
        <div className="VerticalTile">
            {children}
        </div>
    );
}

export default VerticalTile;