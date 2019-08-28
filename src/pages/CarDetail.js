import React, { Component } from 'react';
import fetchJson  from '../utils/fetch' 
import {BASE_UPLOAD} from '../utils/config'
class CarDetail extends Component {
    constructor(){
        super()
        this.state = {
            carInfo:null
        }
    }

    async componentDidMount(){
        const id = this.props.match.params.id
        let car = await fetchJson(`api/car/${id}`);
        this.setState({
            carInfo:car
        })
    }

    render() {
        let car = this.state.carInfo
        console.log('car:',car)
        return (
            <section className="container">
                {
                    car!==null ? (
                        <div className="">
                <div className="wrap-container clearfix">
                    <div className="main-content">
                        <div className="wrap-box" style={{background: "#fff",boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.3)"}}>
                            <div className="zerogrid">
                                <div className="header">
                                    <h1>{car.title} {car.distance}</h1>
                                </div>
                                <div className="row">
                                    <div className="col-2-3">
                                        <div className="wrap-col">
                                            <div className="slider">
                                               
                                                <div className="banner_container">
                                                    <ul className="rslides">
                                                        <li>
                                                            <img src={BASE_UPLOAD+car.images[0]} alt="" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="clear"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1-3">
                                        <div className="wrap-col">
                                            <p className="price">￥{car.price}</p>
                                            <ul className="specs">
                                                {
                                                    car.features.map(([name,value],index) => (
                                                        value ? (<li key={index}><strong>{name}</strong> <span>{value}</span></li>):''
                                                    ))
                                                }
                                                
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wrap-box">
                            <div className="zerogrid">
                                <div className="row">
                                    <div className="col-2-3">
                                        <div className="wrap-col">
                                            <div className="info">
                                                <h2 className="h3">车型配置</h2>
                                                {
                                                    car.features.map(([name,value],index) => (
                                                        value? (<p key={index}>{name}：{value}</p>):''
                                                    ))
                                                }
                                                
                                               
                                            </div>
        
                                            <div className="info">
                                                <h2 className="h3">车辆描述</h2>
                                                {
                                                    car.description.split("\n").map((str,index) => (
                                                        <p key={index}>{str}</p>
                                                    ))
                                                }    
                                                
                                            </div>
                                            <div className="info">
                                                <h2 className="h3">车辆图片</h2>
                                                {
                                                    car.images.map((img,index) =>(
                                                        <img key={index} src={BASE_UPLOAD+img}/>
                                                    ))
                                                }
                                               
                                            </div>
                                        </div>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    ):''
                }
            </section>
        );
    }
}

export default CarDetail;