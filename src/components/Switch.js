import React from 'react';

const Switch = () => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" className="switch__checkbox" />
                <span className="switch__slider" />
            </label>
        </div>
    );
};

export default Switch;
