import React from 'react';
import {  withRouter } from 'react-router-dom';
import Router from './Router';
import { connect } from 'react-redux';
import Navigation from './features/Navbar/navbar'
import HeaderContainer from './features/Header/headerConatiner';



class App extends React.Component {
  render(){
    return <div className='page-container'>
      <HeaderContainer />
      <Navigation {...this.props} />
      <Router />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}

export default withRouter(connect(mapStateToProps)(App))