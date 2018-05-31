import React from "react";

// Function component still individual properties are passed as part of 'props'
// Not using 'this' infront of 'props' because it's not a class but js function
export function LoggedStatus(props) {

    if (props.isLoggedIn) {
        return <p>{props.user} Is Logged In</p>;
    }
    else {
        return <p>{props.user} Is Not Logged In</p>;
    }
}

