/**
 * xuhui86 主页
 */
import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
// import Tabs from 'antd-mobile/lib/tabs';  // 加载 JS
// import 'antd-mobile/lib/tabs/style/css';

class DataPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentWillMount(){
    
  }
  componentDidMount() {
  }
  render() {
    const tabs = [
      { title: 'First Tab'},
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ];
    return (
      <div className="IndexPage">
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of first tab
      </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of second tab
      </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
      </div>
        </Tabs>
        
      </div>
    );
  }
}


export default (connect(
  state => {
    return state.common
  },
  {}
)(DataPage))