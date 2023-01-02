import React, { Component } from 'react';

class IpFetcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            ipAddress: null
        };
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(data => this.setState({ ipAddress: data.ip }));
    }

    render() {
        return (
            <div>
                <p>Your public address </p>
                <p> {this.state.ipAddress} </p>
            </div>
        );
    }
}

export default IpFetcher;