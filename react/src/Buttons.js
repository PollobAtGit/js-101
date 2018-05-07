// React is required for any JSX
import React from "react";
import { FancyButton } from "./FancyButton";

// Export single component
export const Btn = {
    WarningButton: () => <FancyButton buttonName="Warning" color="blue" />,
    DangerButton: () => <FancyButton buttonName="Danger" color="rosybrown" />,
    primaryButton: () => <FancyButton buttonName="Primary" color="aqua" />
};

// This component will not be rendered because of naming convention (!). Components needs to be PascalCased
export const secondaryButton = () => <FancyButton buttonName="Secondary" color="blue" />

// This component will not be rendered if name is not PascalCased. Warning will be thrown
export class InformationButton extends React.Component {
    render() {
        return <FancyButton buttonName="Info" color="rosybrown" />;
    }
}
