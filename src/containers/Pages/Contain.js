/**
 * xuhui86 框架
 */
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css';

import Router from '../../route/index';

class Contain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='Layouts_wrap clear clearFix'>
        <Router />
      </div>
    )
  }
}

export default withRouter(Contain);