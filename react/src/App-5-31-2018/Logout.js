import React from "react";

export function Logout(props) {

    return (
        <button onClick={props.logOutHandler}>
            Logout
        </button>
    );
}
