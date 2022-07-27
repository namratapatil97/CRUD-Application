import React from "react";

const Filterbar = (props) => {
    return(
        <>
        <input type="text" placeholder={props.searchHolder} onChange={e => props.handleChange(e.target.value)}/>
        </>
    );
}

export default Filterbar;