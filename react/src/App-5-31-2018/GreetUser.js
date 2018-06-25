import React from "react";

export class GreetUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = { hasPendingNotification: true };
    }

    render() {
        return (
            <div>
                <p>Hi, {this.props.user}</p>

                {/* 
                In respect to this app 'hasPendingNotification' has no impact because we should atleast render
                'NotificationRetriever' to ensure it gets updated whenever state gets updated
                 */}
                {this.state.hasPendingNotification && <NotificationRetriever />}
            </div>
        );
    }
}

class NotificationRetriever extends React.Component {

    constructor(props) {
        super(props);
        this.state = { notificationCount: 0 };
    }

    setNotificationIncrementer() {
        setInterval(() => {
            this.setState((prevState) => ({ notificationCount: prevState.notificationCount + 1 }));
        }, 3000);
    }

    render() {

        this.setNotificationIncrementer();

        return this.state.notificationCount != 0 && (
            <div>
                <span>Pending notification {this.state.notificationCount}</span>
            </div>
        );
    }
}
