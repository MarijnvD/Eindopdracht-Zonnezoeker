import React from 'react';
import './Toast.css'

function Toast(props) {

    function onClickHandler() {
        props.setTrigger(false);
        console.clear();
    }

    return (props.trigger) ? (
        <div className="Toast">
            <div className="ToastContent">
                {props.children}
                <button className="close-button" type="button" onClick={() => onClickHandler()}>
                    {/*<img className="closing-icon" src={closingIcon} alt="closing icon"/>*/}
                </button>
            </div>
        </div>
    ) : "";
}

export default Toast;