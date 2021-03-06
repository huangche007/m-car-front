import React, { Component } from 'react';
import fetchJson from '../utils/fetch'
class Contact extends Component {
    constructor(){
        super();

    }

    async submitInfo(){
        let feedBackFromData = new FormData(this.refs.feedBack);
        await fetchJson('api/msg',{
            method:'POST',
            body:feedBackFromData
        })
        alert('留言成功，客服会尽快联系您');
    }


    render() {
        return (
            <section id="container">
            <div className="zerogrid">
                <div className="wrap-container clearfix">
                    <div id="main-content">
                        <div className="wrap-box">
                            <div className="header">
                                <h1>投诉和建议</h1>
                                <p>如果您有任何问题，请在下方留言，我们会尽快与您取得联系</p>
                            </div>
                            <div className="row">
                                <div className="col-2-3">
                                    <div className="wrap-col">
                                        <div className="contact">
                                            <div className="contact-header">
                                                <h5>留言建议</h5>
                                            </div>
                                            <div id="contact_form">
                                                <form name="form1" className="ff" ref="feedBack">
                                                    <label className="row">
                                                        <div className="col-1-2">
                                                            <div className="wrap-col">
                                                                <input type="text" name="name" placeholder="您的姓名" required="required" />
                                                            </div>
                                                        </div>
                                                        <div className="col-1-2">
                                                            <div className="wrap-col">
                                                                <input type="email" name="email" placeholder="您的邮箱" required="required" />
                                                            </div>
                                                        </div>
                                                    </label>
                                                    <label className="row">
                                                        <div className="wrap-col">
                                                            <input type="text" name="title" placeholder="留言标题" required="required" />
                                                        </div>
                                                    </label>
                                                    <label className="row">
                                                        <div className="wrap-col">
                                                            <textarea name="content" className="form-control" rows="4" cols="25" required placeholder="留言内容"></textarea>
                                                        </div>
                                                    </label>
                                                    <center><input className="sendButton" type="button" name="Submit" value="提交" onClick={this.submitInfo.bind(this)}/></center>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1-3">
                                    <div className="wrap-col">
                                        <div className="contact-header">
                                            <h5>联系方式</h5>
                                        </div>
                                        <div style={{background: "#fff", padding: "20px", boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.3)"}}>
                                            <p>联系电话：400-670-1080</p>
                                            <p>Email：kefu(at)renrenche.com</p>
                                            <p>商务合作：marketing(at)renrenche.com</p>
                                            <p>网站地址：http://www.renrenche.com</p>
                                            <p>总部地址：北京市朝阳区北苑东路中国铁建广场B座19-21层</p>
                                            <p>地图坐标：http://j.map.baidu.com/K93K7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Contact;