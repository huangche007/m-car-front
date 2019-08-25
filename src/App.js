import React from 'react';
import './asstes/css/style.css'
import './asstes/css/responsiveslides.css'
import './asstes/css/zerogrid.css'
import { thisExpression } from '@babel/types';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
class App extends React.Component{
  constructor(){
    super();
  }

 
  render(){
    return(
      <div className="wrap-body">
        <Header/>
        <Home></Home>
        <Footer/>
      </div>
    )
  }
}
export default App;
