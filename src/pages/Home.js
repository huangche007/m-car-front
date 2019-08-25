import React, { Component } from 'react';
import fetchJson from '../utils/fetch'
import {BASE_UPLOAD} from '../utils/config'
import {Link} from 'react-router-dom'
class Home extends Component {
    constructor(){
        super();
        this.state = {
            banners:[],
            currentPage:1,
            latesCars:[],
            showMore:true,
            chosenCar:[],
            newestCar:[]
        }
    }

    async componentDidMount(){
        const banners = await fetchJson('api/banner')
        
        const cars = await fetchJson(`api/carlist/${this.state.currentPage}`)
        const chosenCar = await fetchJson('api/chosencar');
        const newestCar = await fetchJson('api/latestcar');
        this.setState({
            banners,
            latesCars:cars,
            chosenCar,
            newestCar
        })
    }


    async loadMore(){
        let page = this.state.currentPage+1
        const cars = await fetchJson(`api/carlist/${page}`)
        if(cars.length<=5){
            this.setState({
                showMore:false
            })
        }else{
            this.setState({
                currentPage:page,
                latesCars:[...this.state.latesCars,...cars]
            })
        }
    }

    mapArr(arr,n,fn){
        let result = []
        for(let i=0;i<arr.length;i+=n){
            let smArr = fn(arr.slice(i,i+n));
            result = result.concat(smArr);
        }
        return result
    }

    render() {
        return (
            <div>
                <div className="slider">
                <div className="banner_container">
                    <ul className="rslides banner">
                        {
                            this.state.banners.map((banner,index) => (
                                <li key={banner.ID} style={index ===0 ?{opacity: 1, display:'block'}:{}}>
                                    <img src={`${BASE_UPLOAD}${banner.image}`} alt=""/>
                                    <div className="caption">
                                        <h1>{banner.title}</h1>
                                        <span>{banner.sub_title}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <a className="banner_nav prev">上一张</a>
                    <a className="banner_nav next">下一张</a>
                </div>
                <div className="clear"></div>
            </div>

            <div className="bg-theme">
                <div className="filter zerogrid">
                    <h2 className="t-center">轻松找好车</h2>
                    <div className="row">
                        <div className="col-1-4">
                            <div className="wrap-col">
                                <span>品牌:</span><br/>
                                <select>
                                    <option>--ALL--</option>
                                    <option>Honda</option>
                                    <option>Infiniti</option>
                                    <option>Jeep</option>
                                    <option>Mercedes-Benz</option>
                                    <option>Volvo</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-1-4">
                            <div className="wrap-col">
                                <span>型号:</span><br/>
                                <select>
                                    <option>--ALL--</option>
                                    <option>Aston martin</option>
                                    <option>Audi</option>
                                    <option>Bentley</option>
                                    <option>Bmw</option>
                                    <option>Cadillac</option>
                                    <option>Chevrolet</option>
                                    <option>Citroen</option>
                                    <option>Dacia</option>
                                    <option>Dodge</option>
                                    <option>Ferrari</option>
                                    <option>Ford</option>
                                    <option>Gmc</option>
                                    <option>Hyundai</option>
                                    <option>Jaguar</option>
                                    <option>Lexus</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-1-4">
                            <div className="wrap-col">
                                <span>价格:</span><br/>
                                <select>
                                    <option>--ALL--</option>
                                    <option>0-1000</option>
                                    <option>1000-5000</option>
                                    <option>5000-10000</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-1-4">
                            <div className="wrap-col">
                                <br />
                                <a href="#" className="button bt1">查找</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="container">
                <div className="wrap-container clearfix">
                    <div className="main-content">
                        <div className="wrap-box">
                            <div className="zerogrid">
                                <div className="header">
                                    <h2>精选好车</h2>
                                </div>
                                <div className="row">
                                   {
                                       this.mapArr(this.state.chosenCar,2,arr => (
                                            <div className="col-1-3">
                                                <div className="wrap-col">
                                                    {
                                                        arr.map((iCar,iIndex) => (
                                                            <div className="item t-center" key={iCar.ID}>
                                                                <div className="item-container">
                                                                    <Link to={'/cardetail/'+iCar.ID}>
                                                                        <div className="item-caption">
                                                                            <div className="item-caption-inner">
                                                                                <div className="item-caption-inner1">
                                                                                    <span>{iCar.purchase_time} / {iCar.distance} / {iCar.mileage} / {iCar.shift}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <img src={BASE_UPLOAD+iCar.images[0]} />
                                                                    </Link>
                                                                </div>
                                                                <div className="item-info">
                                                                    <Link to={'/cardetail/'+iCar.ID}><h3>{iCar.title}</h3></Link>
                                                                    <p>{iCar.distance} ￥{(iCar.price/10000).toFixed(1)}万</p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                       ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="wrap-box t-center" style={{background: '#fff', boxShadow:'2px 2px 5px 0px rgba(0,0,0,0.3)'}}>
                            <div className="zerogrid">
                                <div className="header">
                                    <h2>两亿元用户保障金</h2>
                                </div>
                                <strong>重大事故车投诉专线：拨打400-861-0500转6 专人接待</strong>
                                <p>
                                    安全有保障：严格的检测把关，拒绝重大事故车，只为更安全<br/>
                                    车源有保障：249项专业检测，精选放心车源，拒绝重大事故车、水泡车、火烧车<br/>
                                    车源有保障：精选优质车源，从源头上把控质量
                                </p>
                            </div>
                        </div>
                        <div className="wrap-box" >
                            <div className="zerogrid">
                                <div className="header">
                                    <h2>最新好车</h2>
                                </div>
                                <div className="row">
                                    <div className="col-2-3">
                                        <div className="wrap-col">

                                            {
                                                this.state.latesCars.map((car,index) => (
                                                    <div className="row" key={car.ID}>
                                                        <div className="item">
                                                            <div className="col-1-3">
                                                                <div className="item-container">
                                                                    <Link to={'/cardetail/'+car.ID}>
                                                                        <div className="item-caption">
                                                                            <div className="item-caption-inner">
                                                                                <div className="item-caption-inner1">
                                                                                    <span>{car.purchase_time} / {car.distance} / {car.mileage} / {car.shift} /  跑车</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <img src={BASE_UPLOAD+car.images[0]} />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-2-3">
                                                                <div className="wrap-col">
                                                                    <div className="item-info">
                                                                        <Link to={'/cardetail/'+car.ID}><h3>{car.title}</h3></Link>
                                                                        <p>{car.distance} ￥{(car.price/10000).toFixed(1)}万</p>
                                                                        <p>{car.description}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="clear"></div>
                                                        </div>
                                                </div>
                                                ))
                                            }
                                           {
                                               this.state.showMore ? (
                                                <div className="row">
                                                    <a  className="button bt1" onClick={this.loadMore.bind(this)}>加载更多</a>
                                                </div>
                                               ):''
                                           }
                                        </div>
                                    </div>
                                    <div className="col-1-3">
                                        <div className="wrap-col">
                                
                                            <div className="widget">
                                                <div className="wid-header">
                                                    <h5>关于我们</h5>
                                                </div>
                                                <div className="wid-content">
                                                    <p>人人车深耕二手车交易服务，透明无差价交易让普通用户也可以用公平的市场价格，买到精选优质二手车。人人车以资深评估师和手持设备为质量把关，检测项目包含114项国家标准检测（含车辆外观、发动机、转向机构、制动系统、漏水、漏油等），以及人人车独家服务的135项，总计249项专业检测，排除重大事故车，火烧车，水泡车以及工况差的车。</p>
                                                </div>
                                            </div>
                                           
                                            <div className="widget wid-post">
                                                <div className="wid-header">
                                                    <h5>最新上架</h5>
                                                </div>
                                                <div className="wid-content">
                                                    {
                                                        this.state.newestCar.map((car) => (
                                                            <div className="post" key={car.ID}>
                                                                <Link to={'/cardetail/'+car.ID}><img src={BASE_UPLOAD+car.images[0]}/></Link>
                                                                <div className="wrapper">
                                                                    <h5><Link to={'cardetail/'+car.ID}>{car.title}</Link></h5>
                                                                    <span>{(car.price/10000).toFixed(1)}万</span>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                    
                                            <div className="widget">
                                                <div className="wid-header">
                                                    <h5>联系方式</h5>
                                                </div>
                                                <div className="wid-content">
                                                    <p>人人车提供完善的售后服务，承诺车源14天可退，并提供1年/2万公里质保，出现任何问题都可以免费拨打4008-610-500，联系您的专属用车管家。</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
        );
    }
}

export default Home;