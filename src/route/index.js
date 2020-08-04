import React,{ Component } from 'react';

import { Switch,Route,Redirect,BrowserRouter  } from 'react-router-dom'
import IndexPage from '../containers/Pages/IndexPage';//主页
// import OrderPage from '../containers/Pages/OrderPage';//查件页
// import MyPage from '../containers/Pages/MyPage';//我的页面

// import Send from '../containers/Pages/Send';//寄件页
// import Address from '../containers/Pages/Address';//寄件页
// import Edit from '../containers/Pages/Edit';//寄件页
// import OrderDetail from '../containers/Pages/OrderDetail';//订单详情页
// import BatchSend from '../containers/Pages/BatchSend';//批量寄
// import Speak from '../containers/Pages/Speak';//语音寄
// import SoFast from '../containers/Pages/SoFast';//特瞬送
// import Track from '../containers/Pages/Track';//全程跟踪
// import Template from '../containers/template';
// connect 对应 应该使用render而不是component
class Router extends Component{
    render(){
        return(
          // 外层必须要使用一个容器包裹起来
          // BrowserRouter 要在index.js里面写入 在此处写 会导致 路由写进去但是 不会刷新页面
          <div>
            {/* <BrowserRouter>  */}
              <Switch>
                  <Route path='/index' render={props => <IndexPage {...props} />} ></Route>
                  {/* <Route path='/order' render={props => < OrderPage {...props} />} ></Route>
                  <Route path='/my' render={props => <MyPage {...props} />}  ></Route>
                  <Route path='/send' render={props => <Send {...props} />} ></Route>
                  <Route path='/orderDetail' render={props => <OrderDetail {...props} />}  ></Route>
                  <Route path='/batchSend' render={props => <BatchSend {...props} />}  ></Route>
                  <Route path='/speak' render={props => <Speak {...props} />}  ></Route>
                  <Route path='/soFast' render={props => <SoFast {...props} />}  ></Route>
                  <Route path='/track' render={props => <Track {...props} />}  ></Route>
                  <Route path='/address' render={props => <Address {...props} />}  ></Route>
                  <Route path='/edit/:type' render={props => <Edit {...props} />}  ></Route>
                  <Route path='/temp' render={props => <Template {...props} />}  ></Route> */}
                  <Redirect to='/index'></Redirect>
              </Switch>
            {/* </BrowserRouter> */}
          </div>
        )
    }
}

export default Router
