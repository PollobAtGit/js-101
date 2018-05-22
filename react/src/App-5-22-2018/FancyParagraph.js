import React from "react";
import PropTypes from "prop-types";

export class FancyParagraph extends React.Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.paragraphHeading}
                    {this.props.fancyDangerButton}
                </p>
            </div>);
    }
}

FancyParagraph.propTypes = {
    // Property must be a React component
    fancyDangerButton: PropTypes.element,

    // oneOf acts as Enum essentially
    paragraphHeading: PropTypes.oneOf(["From Fancy Paragraph", "Intro To React"])
};

FancyParagraph.defaultProps = {
    // This default property value is also subject to validation for 'propTypes'
    paragraphHeading: "From Fancy"
}
