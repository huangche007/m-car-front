import React from 'react';
import './asstes/css/style.css'
import './asstes/css/responsiveslides.css'
import './asstes/css/zerogrid.css'
import { thisExpression } from '@babel/types';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CarDetail from './pages/CarDetail'
import Contact from './pages/Contact'
import {Switch,Route} from 'react-router-dom'
class App extends React.Component{
  constructor(){
    super();
  }

 
  render(){
    return(
      <div className="wrap-body">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/cardetail/:id" component={CarDetail}/>
          <Route  path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}
export default App;
