import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { AtButton } from 'taro-ui'

import { View, Button, Text } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


type Props = {
  
}


type State = {
  number: number, //
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
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
       
      </View>
    )
  }
}

export default Index

