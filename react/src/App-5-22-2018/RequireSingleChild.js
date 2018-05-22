import React from "react";
import PropTypes from "prop-types";

export class RequireSingleChild extends React.Component {
    render() {
        return <div></div>;
    }
}

RequireSingleChild.propTypes = {
    children: PropTypes.string.isRequired
}