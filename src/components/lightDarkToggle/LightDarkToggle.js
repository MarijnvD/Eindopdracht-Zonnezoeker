import React, {useState} from 'react';
import './LightDarkToggle.css';

function LightDarkToggle() {
    const [checked, toggleChecked] = useState(false);

    return (
        <div className="lightSwitch">
            <p className="lightSwitch-label">
                Light
            </p>

            <span className="lightSwitch-wrapper">
                <input
                    type="checkbox"
                    className="lswitch"
                    id="lmetric-system"
                    value={checked}
                    onChange={() => toggleChecked(!checked)}
                />

                <label
                    htmlFor="lmetric-system"
                    className="lswitch-btn"
                />
            </span>

            <p className="lightSwitch-label">
                Dark
            </p>
        </div>
    );
}

export default LightDarkToggle;