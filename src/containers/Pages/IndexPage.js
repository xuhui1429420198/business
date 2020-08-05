/**
 * xuhui86 主页
 * https://editor.csdn.net/md/?articleId=85104690
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { WingBlank, Tabs, WhiteSpace, List, InputItem, Picker, Toast, DatePicker, Checkbox, ImagePicker, Modal, Button} from 'antd-mobile';

import '../themes/pages/index.scss'
const addressDemo = [
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
];
const imgsFileList = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];
const licenseTypeList = [
  {
    label: '有限责任公司',
    value: '1',
  },
  {
    label: '个体工商户',
    value: '2',
  },
];
const comanyNumList = [
  {
    label: '0-10',
    value: '1',
  },
  {
    label: '11-100',
    value: '2',
  },
  {
    label: '100以上',
    value: '3',
  },
];
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

class DataPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LicenseImgList: [], // 营业执照照片 图片渲染格式参考imgsFileList
      multiple: false, // 图片是否多选
      current: 0, // 当前选中的tab index
      societyCreditCode: '',  // 社会信用代码
      companyName: '', // 公司名称
      businessLicenceAreaList: addressDemo,  // 营业执照地区 List
      businessLicenceArea: ['02', '02-1', '02-1-1'],// 营业执照地区 展示
      businessLicenceAddress: '', // 营业执照地址
      legalRepresentative: '', // 法人代表
      establishDate: new Date(Date.now()), // 成立日期
      licenseDate: new Date(Date.now()), // 执照有效期
      isShowlicenseDate: true, // 是否展示执照有效期
      licenseTypeList, // 营业执照类型List
      licenseType: ['1'], // 选择的营业执照类型 格式需要是数组 内容对应的是 list的value值
      contactArea: '', // 联系地址地区
      contactAddress: '', // 联系地址 
      contact: '', // 联系人 
      contactPhone: '', // 联系人手机 
      weixin: '', // 微信
      contactAreaList: addressDemo,
      contactArea: ['02', '02-1', '02-1-1'],
      comanyNumList, // 公司人数list
      comanyNumType: ['1'],//公司人数list 选中的item
      modal1: false,
      mainClassText: '请选择',
      mainClassList:[
        {
          presetsName:'孕妇',
          presetsCode:'1054',
          adeptCategoryList:[{
            title:'孕妇装',
            id: 197
          }]
        },
        {
          presetsName: '母婴',
          presetsCode: '1055',
          adeptCategoryList: [{
            title: '女装',
            id: 195
          }, {
              title: '童装',
              id: 196
            }]
        },
      ],
      isExperience: true,
      companyImgList: [], // 公司img 1张
      officeImgList: [], //办公室img
      wareHouseImgList: [], // 仓库img
      carHouseImgList: [], // 车间img
      hotProductImgList: [], // 热销产品img
      otherImgList: [], // 其他图片 上限5张
      buttonText: '下一步',
    }
  }
  componentWillMount() {

  }
  componentDidMount() {
  }
  // 渲染基本信息
  renderBaseInfo() {
    const {
      LicenseImgList,
      multiple,
      societyCreditCode,
      companyName,
      businessLicenceAreaList,
      businessLicenceArea,
      businessLicenceAddress,
      legalRepresentative,
      establishDate,
      licenseDate,
      isShowlicenseDate,
      licenseTypeList,
      licenseType,
      contactAreaList,
      contactArea,
      contactAddress,
      contact,
      contactPhone,
      weixin,

    } = this.state;
    return (
      <div className='base-info-content'>
          <List>
            <List.Item>
              <div>营业执照</div>
              <div className='gray-text'>营业执照上需印有公章或手印，小于10M。请注意核对信息。</div>
            </List.Item>
            <ImagePicker
              length="5"
              files={LicenseImgList}
            onChange={this.onLicenseImgChange.bind(this, 'LicenseImgList')}
            onImageClick={this.onLicenseImgClick.bind(this, 'LicenseImgList')}
              selectable={LicenseImgList.length < 1}
            />
            <InputItem
              placeholder="请输入"
              error={!societyCreditCode}
              onErrorClick={this.onErrorClick.bind(this, 'societyCreditCode')}
              onChange={this.onInputChange.bind(this, 'societyCreditCode')}
              value={societyCreditCode}
            >统一社会信用代码</InputItem>
            <InputItem
              placeholder="请输入"
              error={!companyName}
              onErrorClick={this.onErrorClick.bind(this, 'companyName')}
              onChange={this.onInputChange.bind(this, 'companyName')}
              value={companyName}
            >
              公司名称
            </InputItem>
            <Picker extra="请选择(可选)"
              data={businessLicenceAreaList}
              value={businessLicenceArea}
              title="营业执照地区"
              onOk={e => this.setState({ businessLicenceArea: e })}
              onDismiss={e => console.log('dismiss', e)}
            >
              <List.Item arrow="horizontal">营业执照地区</List.Item>
            </Picker>
            <InputItem
              placeholder="请输入"
              error={!businessLicenceAddress}
              onErrorClick={this.onErrorClick.bind(this, 'businessLicenceAddress')}
              onChange={this.onInputChange.bind(this, 'businessLicenceAddress')}
              value={businessLicenceAddress}
            >营业执照地址</InputItem>
          </List>
          <WhiteSpace />
          <List>
            <InputItem
              placeholder="请输入"
              onChange={this.onInputChange.bind(this, 'legalRepresentative')}
              value={legalRepresentative}
            >法人代表</InputItem>
            <DatePicker
              mode="date"
              title="成立日期"
              extra="请选择"
              value={establishDate}
              maxDate={new Date(Date.now())}
              onChange={date => this.setState({ establishDate: date })}
            >
              <List.Item arrow="horizontal">成立日期</List.Item>
            </DatePicker>

            <List.Item>
              执照有效期
              <Checkbox.CheckboxItem
                onChange={e => this.setState({ isShowlicenseDate: !e.target.checked })} >
                长期有效
              </Checkbox.CheckboxItem>
              {isShowlicenseDate &&
                <DatePicker
                  mode="date"
                  title="执照有效期"
                  extra="请选择"
                  value={licenseDate}
                  minDate={new Date(Date.now())}
                  onChange={date => this.setState({ licenseDate: date })}
                >
                  <List.Item arrow="horizontal">请选择有效期</List.Item>
                </DatePicker>
              }

            </List.Item>
            <Picker
              data={licenseTypeList}
              title="营业执照类型"
              cols={1}
              value={licenseType}
              onOk={e => this.setState({ licenseType: e })}
              className="forss">
              <List.Item arrow="horizontal">营业执照类型</List.Item>
            </Picker>
          </List>
          <WhiteSpace />
          <List>

            <Picker
              extra="请选择(可选)"
              data={contactAreaList}
              value={contactArea}
              title="联系地址地区"
              onOk={e => this.setState({ contactArea: e })}
              onDismiss={e => console.log('dismiss', e)}
            >
              <List.Item arrow="horizontal">联系地址地区</List.Item>
            </Picker>
            <InputItem
              placeholder="请输入"
              error={!contactAddress}
              onErrorClick={this.onErrorClick.bind(this, 'contactAddress')}
              onChange={this.onInputChange.bind(this, 'contactAddress')}
              value={contactAddress}
            >联系地址</InputItem>
            <InputItem
              placeholder="请输入"
              error={!contact}
              onErrorClick={this.onErrorClick.bind(this, 'contact')}
              onChange={this.onInputChange.bind(this, 'contact')}
              value={contact}
            >联系人</InputItem>
            <InputItem
              placeholder="请输入"
              error={!contactPhone}
              onErrorClick={this.onErrorClick.bind(this, 'contactPhone')}
              onChange={this.onInputChange.bind(this, 'contactPhone')}
              value={contactPhone}
            >
              联系人手机
            </InputItem>
            <InputItem
              placeholder="请输入"
              error={!weixin}
              onErrorClick={this.onErrorClick.bind(this, 'weixin')}
              onChange={this.onInputChange.bind(this, 'weixin')}
              value={weixin}
            >
              联系人手机
            </InputItem>
          </List>

      </div>);
  }
  onLicenseImgChange = (name, files, type, index) => {
    console.log(files, type, index);
    this.setState({
      [name]: files,
    });
  };
  onLicenseImgClick = (name,index, fs) => {
    console.log(name,index, fs)
  }

  onErrorClick = (name, value) => {
    switch (name) {
      case 'societyCreditCode':
        Toast.info('请输入营业执照');
        break;
      case 'companyName':
        Toast.info('请输入公司名称');
        break;
      case 'businessLicenceAddress':
        Toast.info('营业执照地址');
        break;
      case 'contactAddress':
        Toast.info('联系地址');
        break;
      case 'contact':
        Toast.info('联系人');
        break;
      case 'contactPhone':
        Toast.info('联系人手机');
        break;
      case 'weixin':
        Toast.info('微信');
        break;
    }
  }
  onInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  }


  
  // 渲染经营情况
  renderSituation() {
    const {
      comanyNumList,
      comanyNumType,
      isExperience,
      companyImgList,
      officeImgList,
      wareHouseImgList,
      carHouseImgList,
      hotProductImgList,
      otherImgList,
      mainClassText,
    } = this.state;
    return (
      <div className='situation-content'>
        <List>
          <Picker
            data={comanyNumList}
            title="公司人数"
            cols={1}
            value={comanyNumType}
            onOk={e => this.setState({ comanyNumType: e })}
            className="forss">
            <List.Item arrow="horizontal">公司人数</List.Item>
          </Picker>
          <List.Item 
            arrow="horizontal"
            extra={mainClassText}
            onClick={() => this.setState({modal1: true})}
          >
            主营品类
          </List.Item>
          
        </List>
        <WhiteSpace/>
        <List>
          <List.Item>
            电商平台经验
            <Checkbox.CheckboxItem
              checked={isExperience}
              onChange={e => this.setState({ isExperience: e.target.checked })} >
              有
            </Checkbox.CheckboxItem>
            <Checkbox.CheckboxItem
              checked={!isExperience}
              onChange={e => this.setState({ isExperience: !e.target.checked })} >
              无
            </Checkbox.CheckboxItem>
          </List.Item>
        </List>
        <WhiteSpace />
        <List>
          <List.Item>
            <div>
              经营图片
              <img src="https://statics.sheinside.cn/resource/nj-fed-dist/srm-mobile/7c0067c/dist/fd945699b7253e6f7e179275a644c8db.png"></img>
            </div>
            <div>营业执照上需印有公章或手印，小于10M。请注意核对信息。</div>
          </List.Item>
          <div className='mansgeImgsList'>
            <div className='img-box'>
              <div className='top-content'>
                <ImagePicker
                  length="1"
                  files={companyImgList}
                  onChange={this.onLicenseImgChange.bind(this, 'companyImgList')}
                  onImageClick={this.onLicenseImgClick.bind(this, 'companyImgList')}
                  selectable={companyImgList.length < 1}
                />
              </div>
              <div className='bottom-content'>
                公司全景
              </div> 
            </div>
            <div className='img-box'>
              <div className='top-content'>
                <ImagePicker
                  length="1"
                  files={officeImgList}
                  onChange={this.onLicenseImgChange.bind(this, 'officeImgList')}
                  onImageClick={this.onLicenseImgClick.bind(this, 'officeImgList')}
                  selectable={officeImgList.length < 1}
                />
              </div>
              <div className='bottom-content'>
                办公室
              </div>
            </div>
            <div className='img-box'>
              <div className='top-content'>
                <ImagePicker
                  length="1"
                  files={wareHouseImgList}
                  onChange={this.onLicenseImgChange.bind(this, 'wareHouseImgList')}
                  onImageClick={this.onLicenseImgClick.bind(this, 'wareHouseImgList')}
                  selectable={wareHouseImgList.length < 1}
                />
              </div>
              <div className='bottom-content'>
                仓库
              </div>
            </div>
            <div className='img-box'>
              <div className='top-content'>
                <ImagePicker
                  length="1"
                  files={carHouseImgList}
                  onChange={this.onLicenseImgChange.bind(this, 'carHouseImgList')}
                  onImageClick={this.onLicenseImgClick.bind(this, 'carHouseImgList')}
                  selectable={carHouseImgList.length < 1}
                />
              </div>
              <div className='bottom-content'>
                车间
              </div>
            </div>
            <div className='img-box'>
              <div className='top-content'>
                <ImagePicker
                  length="1"
                  files={hotProductImgList}
                  onChange={this.onLicenseImgChange.bind(this, 'hotProductImgList')}
                  onImageClick={this.onLicenseImgClick.bind(this, 'hotProductImgList')}
                  selectable={hotProductImgList.length < 1}
                />
              </div>
              <div className='bottom-content'>
                热销产品
              </div>
            </div>
          </div>
          <div className='otherImgList'>
            <ImagePicker
              length="5"
              files={otherImgList}
              onChange={this.onLicenseImgChange.bind(this, 'otherImgList')}
              onImageClick={this.onLicenseImgClick.bind(this, 'otherImgList')}
              selectable={otherImgList.length < 5}
            />
            <div className='bottom-content'>其他</div>
          </div>
          
        </List>
      </div>
    )
  }

  renderModal(){
    const { 
      modal1,
      mainClassList,
     } = this.state
    return(
      <div>
        {modal1}
        <Modal
          popup
          animationType="slide-up"
          visible={modal1}
          onClose={this.onClose('modal1')}
        >
          <div className='list-content'>
            <div className='left'>
              <List>
                {mainClassList.map((mainClass, index) => (
                  <List.Item key={index}>{mainClass.presetsName}</List.Item>
                ))}
              </List>
            </div>
            <div className='right'>
              <List>
                {mainClassList.map((mainClass) => (
                  mainClass.adeptCategoryList.map((item, index) => (
                    <List.Item key={index}>{item.title}</List.Item>
                  ))
                ))}
              </List>
            </div>
            
          </div>
        </Modal>
      </div>
     
    )
  }

  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }

  renderButton(){
    const { buttonText } = this.state;
    return(
      <div className='button-content'>
        <div className='button' onClick={this.buttonClick}>{buttonText}</div>
      </div>
    )
  }

  buttonClick = () =>{
    const { buttonText } = this.state;
    if (buttonText === '下一步') {
      this.setState({
        buttonText: '提交',
        current: 1,
      })
    } 
  }
  onTabClick = (tab, index) => {
    let buttonText = '';
    if (index == 0) {
      buttonText = '下一步'
    } else {
      buttonText = '提交'
    }
    this.setState({
      current: index,
      buttonText
    })
  }

  render() {
    const tabs = [
      { title: '基本信息' },
      { title: '经营情况' },
    ];
    const { current} = this.state;
    return (
      <div className="IndexPage">

        <Tabs tabs={tabs}
          initialPage={0}
          page={current}
          onTabClick={this.onTabClick}
        >
          <div className='item-box'>
            <WingBlank size="sm">
              {this.renderBaseInfo()}
            </WingBlank>
          </div>

          <div className='item-box'>
            <WingBlank size="sm">
              {this.renderSituation()}
            </WingBlank>
          </div>
        </Tabs>
        {this.renderButton()}
        {this.renderModal()}
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