import React,{ Component } from 'react';

class Hello extends Component{

  constructor(props) {
    super(props);
    this.state = {text: '1.0'};
  }

  componentDidMount() {
    console.log('第一次渲染后调用,已生成dom')
  }
  render() {
    return (
      <div>Hello{this.state.text}</div>
    )
  }
}

export default Hello;