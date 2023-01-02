import React from 'react';

class IpFetcher extends React.Component {
  state = {
    ipAddress: '',
  };

  componentDidMount() {
    const ipType = this.props.ipType === 'ipv4' ? 'IPv4' : 'IPv6';
    fetch(`https://api.ipify.org?format=json&callback=?`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          ipAddress: data.ip,
        });
      });
  }

  render() {
    return (
      <div>
        <p>Your public {this.props.ipType} address </p>
        <p> {this.state.ipAddress} </p>
      </div>
    );
  }
}

export default IpFetcher;
