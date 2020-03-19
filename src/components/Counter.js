import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };
  }

  componentDidMount() {
    this.timerid = setInterval(() => {
      this.setState({
        number: this.state.number + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerid);
  }

  render() {
    return <div>{this.props.render(this.state.number)}</div>;
  }
}
