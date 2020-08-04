import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, Picker } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtInput, AtForm, AtImagePicker, AtList, AtListItem} from 'taro-ui'

import './index.scss'


type Props = {
  
}


type State = {
  current: number, //当前item index
  files: any,// 图片列表
  societyCreditCode: string, // 社会信用代码
  companyName: string, // 公司名称
  businessLicenceArea: string, // 营业执照地区
  businessLicenceAddress: string, // 营业执照地址
  legalRepresentative: string, // 法人代表
  establishDate: string, // 成立日期
  licenseDate: string, // 执照有效期
  licenseType: string, // 营业执照类型
  contactArea: string, // 联系地址地区
  contactAddress: string, // 联系地址 
  contact: string, // 联系人 
  contactPhone: string, // 联系人手机 
  weixin: string, // 微信 
  dateSel: string, // 选择的时间
}


@connect(
  ({ }) => {
    return {}
  },
  dispatch => {
    return bindActionCreators(
      {},
      dispatch,
    )
  }
)

class Index extends Component<Props, State> {
  private tabList: Array<any> = [{ title: '基本信息' }, { title: '经营情况' }]
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
      files: [{
          url: 'https://storage.360buyimg.com/jdstatic/express/img/menu_send_heavy.png',
        },{
          url: 'https://storage.360buyimg.com/jdstatic/express/img/menu_send_heavy.png',
        }, {
          url: 'https://storage.360buyimg.com/jdstatic/express/img/menu_send_heavy.png',
        }, {
          url: 'https://storage.360buyimg.com/jdstatic/express/img/menu_send_heavy.png',
        }, {
          url: 'https://storage.360buyimg.com/jdstatic/express/img/menu_send_heavy.png',
        }, {
          url: 'https://storage.360buyimg.com/jdstatic/express/img/menu_send_heavy.png',
        }, {
          url: 'https://storage.360buyimg.com/jdstatic/express/img/menu_send_heavy.png',
        }],
      societyCreditCode: '', 
      companyName: '', 
      businessLicenceArea: '', 
      businessLicenceAddress: '', 
      legalRepresentative: '', // 法人代表
      establishDate: '', // 成立日期
      licenseDate: '', // 执照有效期
      licenseType: '', // 营业执照类型
      contactArea: '', // 联系地址地区
      contactAddress: '', // 联系地址 
      contact: '', // 联系人 
      contactPhone: '', // 联系人手机 
      weixin: '', // 微信 
      dateSel: '2018-04-22', // 选择的时间
      
    }
  }

  componentDidMount () { }
  // 渲染日期
  renderDate(){
    const { dateSel } = this.state;
    return (
      <View className='page-section'>
        <View>
          <Picker 
          mode='date' 
          value=''
          onChange={this.onDateChange.bind(this)}
          >
            <AtList
              hasBorder={false}
            >
              <AtListItem title='成立日期' extraText={dateSel} arrow='right' hasBorder={true}/>
            </AtList>
          </Picker>
        </View>
      </View>
    )
  }
  onDateChange(e){
    this.setState({
      dateSel: e.detail.value
    })
  }

  // 渲染地址
  renderAddress() {
    const { multiSelector } = this.state;
    return (
      <View className='page-section'>
        <View>
          <Picker
            mode='multiSelector'
            onChange={this.onDateChange.bind(this)}
          >
            <AtList>
              <AtListItem title='成立日期' extraText={dateSel} arrow='right'/>
            </AtList>
          </Picker>
        </View>
      </View>
    )
  }
  onDateChange(e) {
    this.setState({
      dateSel: e.detail.value
    })
  }
  // 渲染基本信息
  renderBaseInfo(){
    const { 
      files, 
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
    } = this.state;
    return(
      <View className='base-info-content'>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
        >
          <View className='box top-content'>
            <View className='top-view'>
              <View className='text1'>营业执照</View>
              <View className='text2 gray'>营业执照上需印有公章或手印，小于10M。请注意核对信息。</View>
            </View>
           
            <View className='imgs-content'>
              <View className='img-content'>
                <AtImagePicker
                  length={5}
                  files={files}
                  onChange={this.onChange.bind(this)}
                  onFail={this.onFail.bind(this)}
                  onImageClick={this.onImageClick.bind(this)}
                ></AtImagePicker>
              </View>
            </View>
            <AtInput
              name='societyCreditCode'
              title='统一社会信用代码'
              type='text'
              placeholder='统一社会信用代码'
              error={!societyCreditCode}
              required
              value={societyCreditCode}
              onChange={this.handleChange.bind(this,'societyCreditCode')}
            />
            <AtInput
              name='companyName'
              title='公司名称'
              type='text'
              placeholder='密码不能少于10位数'
              error={!companyName}
              required
              value={companyName}
              onChange={this.handleChange.bind(this, 'companyName')}
            />
            <AtInput
              name='businessLicenceArea'
              title='营业执照地区'
              type='text'
              placeholder='营业执照地区'
              error={!businessLicenceArea}
              required
              value={businessLicenceArea}
              onChange={this.handleChange.bind(this,'businessLicenceArea')}
            />
            <AtInput
              name='businessLicenceAddress'
              title='营业执照地址'
              type='text'
              placeholder='营业执照地址'
              error={!businessLicenceAddress}
              required
              value={businessLicenceAddress}
              onChange={this.handleChange.bind(this,'businessLicenceAddress')}
            />
          </View>
          <View className='box midden-content'>
            <AtInput
              name=' legalRepresentative'
              title='法人代表'
              type='text'
              placeholder='法人代表'
              value={legalRepresentative}
              onChange={this.handleChange.bind(this, 'legalRepresentative')}
            />
            {/* <AtInput
              name='establishDate'
              title='成立日期'
              type='text'
              placeholder='成立日期'
              value={establishDate}
              onChange={this.handleChange.bind(this, 'establishDate')}
            /> */}
            {this.renderDate()}
            <AtInput
              name='licenseDate'
              title='执照有效期'
              type='text'
              placeholder='执照有效期'
              value={licenseDate}
              onChange={this.handleChange.bind(this, 'licenseDate')}
            />
            <AtInput
              name='licenseType'
              title='营业执照类型'
              type='text'
              placeholder='营业执照类型'
              value={licenseType}
              onChange={this.handleChange.bind(this, 'licenseType')}
            />
          </View>
          <View className='box bottom-content'>
            <AtInput
              name='contactArea'
              title='联系地址地区'
              type='text'
              placeholder='联系地址地区'
              error={!contactArea}
              required
              value={contactArea}
              onChange={this.handleChange.bind(this, 'licenseType')}
            />
            <AtInput
              name='contactAddress'
              title='联系地址'
              type='text'
              placeholder='联系地址'
              error={!contactAddress}
              required
              value={contactAddress}
              onChange={this.handleChange.bind(this, 'licenseType')}
            />
            <AtInput
              name='contact'
              title='联系人'
              type='text'
              placeholder='联系人'
              error={!contact}
              required
              value={contact}
              onChange={this.handleChange.bind(this, 'licenseType')}
            />
            <AtInput
              name='contactPhone'
              title='联系人手机'
              type='text'
              placeholder='联系人手机'
              error={!contactPhone}
              required
              value={contactPhone}
              onChange={this.handleChange.bind(this, 'licenseType')}
            />
            <AtInput
              name='weixin'
              title='微信'
              type='text'
              placeholder='微信'
              error={!weixin}
              required
              value={weixin}
              onChange={this.handleChange.bind(this, 'licenseType')}
            />
          </View>
        
        </AtForm>
      </View>
    )
  }
  onChange(files) {
    this.setState({
      files
    })
  }
  onFail(mes) {
    console.log(mes)
  }
  onImageClick(index, file) {
    console.log(index, file)
  }
  handleChange(e){ // input 输入框
    console.log(e)
  }
  onSubmit(){ // 提交表单

  }
  // 渲染经营情况
  renderSituation(){
    return(
      <View className='situation-content'>

      </View>
    )
  }


  handleClick(value) {
    this.setState({
      current: value,
    })
  }
  render () {
    const { current } = this.state
    const { tabList }  = this;
    return (
      <View className='index'>
        <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={current} index={0} >
            {this.renderBaseInfo()}
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Index


