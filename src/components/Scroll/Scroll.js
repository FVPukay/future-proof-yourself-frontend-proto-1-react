import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid #0D6EFD', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;