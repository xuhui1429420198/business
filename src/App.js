import React,{ Component } from 'react';
import './App.scss';
import Contain from './containers/Pages/Contain'

class App extends Component {
  componentDidMount() {
    function calcRem () {
      var deviceWidth = document.documentElement.clientWidth;
      if (deviceWidth > 640) {
          deviceWidth = 640;
      } else if (deviceWidth < 320) {
          deviceWidth = 320;
      }
      document.documentElement.style.fontSize = deviceWidth / 3.75 + 'px';
    }
    calcRem();
    window.onresize = function () {
      calcRem()
    }
  }
  render() {
      return (
        <div>
          <div className='pageBox'>
            <Contain/>
          </div>
        </div>   
      )
  }
}

export default App;
