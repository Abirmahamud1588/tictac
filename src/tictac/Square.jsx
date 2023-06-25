import React from 'react';

const Square = (props) => {
    return (
        <div onClick={props.onClick} style={{border:"1px solid green",height:'90px' ,padding
        :'20px', width:'90px'}}>
            <h1>{props.value}</h1>
        </div>
    );
};

export default Square;