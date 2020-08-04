/**
 * xuhui86 主页
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Tabs, WhiteSpace, List, InputItem, Picker, Toast } from 'antd-mobile';

import '../themes/pages/index.scss'


class DataPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0, // 当前选中的tab index
      societyCreditCode: '',  // 社会信用代码
      companyName: '', // 公司名称
      businessLicenceArea: '',  // 营业执照地区
      businessLicenceAddress: '',  // 营业执照地址
      legalRepresentative: '', // 法人代表
      establishDate: '', // 成立日期
      licenseDate: '', // 执照有效期
      licenseType: '', // 营业执照类型
      contactArea: '', // 联系地址地区
      contactAddress: '', // 联系地址 
      contact: '', // 联系人 
      contactPhone: '', // 联系人手机 
      weixin: '', // 微信
      addressMultiSelector: [
        {
          label: '北京',
          value: '01',
          children: [
            {
              label: '东城区',
              value: '01-1',
            },
            {
              label: '西城区',
              value: '01-2',
            },
            {
              label: '崇文区',
              value: '01-3',
            },
            {
              label: '宣武区',
              value: '01-4',
            },
          ],
        },
        {
          label: '浙江',
          value: '02',
          children: [
            {
              label: '杭州',
              value: '02-1',
              children: [
                {
                  label: '西湖区',
                  value: '02-1-1',
                },
                {
                  label: '上城区',
                  value: '02-1-2',
                },
                {
                  label: '江干区',
                  value: '02-1-3',
                },
                {
                  label: '下城区',
                  value: '02-1-4',
                },
              ],
            },
            {
              label: '宁波',
              value: '02-2',
              children: [
                {
                  label: 'xx区',
                  value: '02-2-1',
                },
                {
                  label: 'yy区',
                  value: '02-2-2',
                },
              ],
            },
            {
              label: '温州',
              value: '02-3',
            },
            {
              label: '嘉兴',
              value: '02-4',
            },
            {
              label: '湖州',
              value: '02-5',
            },
            {
              label: '绍兴',
              value: '02-6',
            },
          ],
        },
      ]
    }
  }
  componentWillMount() {

  }
  componentDidMount() {
  }
  // 渲染基本信息
  renderBaseInfo() {
    const {
      files1,
      societyCreditCode,
      companyName,
      businessLicenceAddress,
      businessLicenceArea,
      legalRepresentative,
      establishDate,
      licenseDate,
      licenseType,
      contactArea,
      contactAddress,
      contact,
      contactPhone,
      weixin,
      addressMultiSelector
    } = this.state;
    return (
      <div className='base-info-content'>
        <form>
          <List>
            <InputItem
              placeholder="请输入"
              error={!societyCreditCode}
              onErrorClick={this.onErrorClick.bind(this, 'societyCreditCode')}
              onChange={this.onInputChange.bind(this,'societyCreditCode')}
              value={societyCreditCode}
            >统一社会信用代码</InputItem>
            <InputItem 
              placeholder="请输入"
              error={!companyName}
              onErrorClick={this.onErrorClick.bind(this, 'companyName')}
              onChange={this.onInputChange.bind(this, 'companyName')}
              value={societyCreditCode}
              value={companyName}
            >
              公司名称
            </InputItem>
            <Picker extra="请选择(可选)"
              data={addressMultiSelector}
              value={['02', '02-1', '02-1-1']}
              title="营业执照地区"
              onOk={e => console.log('ok', e)}
              onDismiss={e => console.log('dismiss', e)}
            >
              <List.Item arrow="horizontal">营业执照地区</List.Item>
            </Picker>
          </List>
          <WhiteSpace />
        </form>
      </div>);
  }
  onErrorClick = (name, value) => {
    // if (this.state.hasError) {
    //   Toast.info('Please enter 11 digits');
    // }
    switch (name) {
      case 'societyCreditCode':
        Toast.info('请输入营业执照');
        break;
      case 'companyName':
        Toast.info('请输入公司名称');
        break;
    }
  }
  onInputChange = (name, value) => {
    switch(name){
      case 'societyCreditCode':
        this.setState({
          societyCreditCode: value,
        });
        break;
      case 'companyName':
        this.setState({
          companyName: value,
        });
        break;
    }
  }
  // 渲染经营情况
  renderSituation() {
    return (
      <div className='situation-content'>
        {this.renderCompanyPeopleNum()}
        {this.renderMainCategories()}
      </div>
    )
  }
  // 渲染公司人数
  renderCompanyPeopleNum() {
    return (
      <div className='companyPeopleNum-content'>

      </div>
    )
  }
  // 渲染主营品类
  renderMainCategories() {
    return (
      <div className='mainCategories-content'>

      </div>
    )
  }
  onTabClick = (tab, index) => {
    console.log('onTabClick', index, tab);
    this.setState({
      current: index
    })
  }

  render() {
    const tabs = [
      { title: '基本信息' },
      { title: '经营情况' },
    ];
    return (
      <div className="IndexPage">
        <Tabs tabs={tabs}
          initialPage={0}
          onTabClick={this.onTabClick}
        >
          <div className='item-box'>
            {this.renderBaseInfo()}
          </div>
          <div className='item-box'>
            {this.renderSituation()}
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