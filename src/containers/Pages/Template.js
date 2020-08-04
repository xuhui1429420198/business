/**
 * xuhui86 模板
 */
import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
class Hello extends Component{

  constructor(props) {
    super(props);
    this.state = {text: '1.0'};
  }

  componentDidMount() {
  }
  render() {
    return (
      <div>Hello{this.state.text}</div>
    )
  }
}

export default withRouter(Hello);