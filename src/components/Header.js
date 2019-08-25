import React, { Component } from 'react';
import logoImg from '../asstes/images/logo.png'
class Header extends Component {
    render() {
        return (
            <header className="bg-theme">
                <div className="wrap-header zerogrid">
                    <div className="row">
                        <div className="cssmenu">
                            <ul>
                            <li className='active'><a href="index.html">首页</a></li>
                            <li><a href="single.html">选车</a></li>
                            <li><a href="contact.html">联系方式</a></li>
                            </ul>
                        </div>
                        <a href='index.html' className="logo"><img src={logoImg} /></a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;