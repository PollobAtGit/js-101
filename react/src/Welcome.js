import React from 'react';
import { Header } from "./Header";

export class Welcome extends React.Component {

    render() {

        const current = new Date();
        return <Header name={this.props.name} minutes={current.getMinutes()} seconds={current.getSeconds()} />;
    }
  }
