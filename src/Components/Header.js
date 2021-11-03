import React, {Component} from 'react';
import './Header.css'
import logo from '../librerias-gandhi.png'

class Header extends Component{
    render (){
        return(
            <div className="Header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Header;

