import React from 'react';
import './PageTile.css';

function PageTile({children}) {

    return (
        <div className="PageWrapper">
            {children}
        </div>
    );
}

export default PageTile;