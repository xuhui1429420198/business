import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Picker } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtInput, AtForm, AtImagePicker, AtList, AtListItem, AtButton} from 'taro-ui'

import './index.scss'


type Props = {
  
}


type State = {
  current: number, //当前item index
  files1: Array<any>,// 图片列表
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
  multiSelector: Array<any>, // 选择的地址
  mulitSelectorValues: Array <any>, // 选择的地址 index
  buttonText: string, // 底部按钮文案
  companyPeopleNumList: Array<any>
  companyPeopleNum: string // 公司人数
  mainCategoriesList: Array<any>
  mainCategories: string // 主营品类
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
      files1: [{
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
      multiSelector: [
        [
          {
          label: '北京',
          value: '1'
          }, {
            label: '天津',
            value: '2'
          }, {
            label: '重庆',
            value: '3'
          }, {
            label: '河北',
            value: '4'
          },
        ],
        [
          {
            label: '朝阳区',
            value: '11'
          }, {
            label: '海淀区',
            value: '12'
          }, {
            label: '大兴区',
            value: '13'
          }, {
            label: '西城区',
            value: '14'
          },
        ]
      ],
      mulitSelectorValues: [0, 1], // 选择的下标
      buttonText: '下一步',
      companyPeopleNumList: ['0-10', '11-100', '101-1000', '1000已上'],
      companyPeopleNum: '0-10', // 公司人数
      mainCategoriesList: ['0-10', '11-100', '101-1000', '1000已上'],
      mainCategories: '0-10' // 主营品类
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
    const { multiSelector, mulitSelectorValues } = this.state;
    const provice = multiSelector[0][mulitSelectorValues[0]].label;
    const city = multiSelector[1][mulitSelectorValues[1]].label
    const address = `${provice}${city}`;
    return (
      <View className='page-section'>
        <Picker
          mode='multiSelector'
          range={multiSelector}
          rangeKey= 'label'
          value={mulitSelectorValues}
          onChange={this.handleMulitChange}
        >
          <AtList>
            <AtListItem
              title='请选择地址'
              extraText={address}
              arrow='right'
            />
          </AtList>
        </Picker>
      </View>
    )
  }

  handleMulitChange = (e): void => {
    this.setState({
      mulitSelectorValues: e.detail.value
    })
  }
  // 渲染公司人数
  renderCompanyPeopleNum() {
    const { companyPeopleNumList, companyPeopleNum } = this.state;
    return (
      <View className='page-section'>
        <View>
          <Picker
            mode='selector'
            range={companyPeopleNumList}
            onChange={this.onCompanyItemChange.bind(this)}
          >
            <AtList
              hasBorder={false}
            >
              <AtListItem title='成立日期' extraText={companyPeopleNum} arrow='right' hasBorder={true} />
            </AtList>
          </Picker>
        </View>
      </View>
    )
  }
  onCompanyItemChange() {

  }
  // 渲染主营品类
  renderMainCategories() {
    const { mainCategoriesList, mainCategories } = this.state;
    return (
      <View className='page-section'>
        <View>
          <Picker
            mode='selector'
            value={0}
            range={mainCategoriesList}
            onChange={this.mainItemChange.bind(this)}
          >
            <AtList
              hasBorder={false}
            >
              <AtListItem title='成立日期' extraText={mainCategories} arrow='right' hasBorder={true} />
            </AtList>
          </Picker>
        </View>
      </View>
    )
  }
  mainItemChange() {

  }
  // 擅长产品

  // 渲染基本信息
  renderBaseInfo(){
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
                  files={files1}
                  onChange={this.onFileChange.bind(this,'file1')}
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
            {/* <AtInput
              name='contactArea'
              title='联系地址地区'
              type='text'
              placeholder='联系地址地区'
              error={!contactArea}
              required
              value={contactArea}
              onChange={this.handleChange.bind(this, 'licenseType')}
            /> */}
            {this.renderAddress()}
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
  onFileChange = (stateName: string, files: []): void =>{
    console.log('stateName', stateName)
    console.log('files', files)
    this.setState({
      files1: files
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
        {this.renderCompanyPeopleNum()}
        {this.renderMainCategories()}
      </View>
    )
  }

  // 渲染提交按钮
  renderButton(){
    const {buttonText} = this.state;
    return (
      <View className='bottom-button'>
        <AtButton
          type='primary'
          onClick={this.buttonClick.bind(this)}
        >
          {buttonText}
        </AtButton>
      </View>
     
    )
  }
  buttonClick(){
    const { buttonText} = this.state;
    if (buttonText === '下一步'){
      this.setState({
        buttonText: '提交',
        current: 1,
      })
    } 
  }
  handleClick(value) {
    let buttonText = '';
    if(value == 0){
      buttonText = '下一步'
    } else {
      buttonText = '提交'
    }
    this.setState({
      current: value,
      buttonText
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
            {this.renderSituation()}
          </AtTabsPane>
        </AtTabs>
        {this.renderButton()}
      </View>
    )
  }
}

export default Index


