import React, { Component } from 'react';
import logoImg from '../asstes/images/logo.png'
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <header className="bg-theme">
                <div className="wrap-header zerogrid">
                    <div className="row">
                        <div className="cssmenu">
                            <ul>
                                <li className='active'><Link to="/">首页</Link></li>
                                <li><Link to="/">选车</Link></li>
                                <li><Link to="/contact">联系方式</Link></li>
                            </ul>
                        </div>
                        <Link to="/" className="logo"><img src={logoImg} /></Link>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;