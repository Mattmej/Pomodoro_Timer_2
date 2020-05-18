import React from 'react';

const testBox = (props) => {
    return (
        <div className={props.testboxClass}>
            {props.testboxText}
        </div>
    )
};

export default testBox;