import React from 'react';
import Header from './header';
import * as axios from 'axios';
import { setUserData } from '../login/reducer';
import { connect } from 'react-redux'

class HeaderContainer extends React.Component  {
    componentDidMount () {
        axios
        .get(`https://api.myjson.com/bins/622xq`, {
            withCredentials: true
        })
        .then(response => {
            if(response.data.resultCode === 0 ){ 
            let {email, password, rememberMe} =  response.data;
            this.props.setUserData(email, password, rememberMe)
            }
        })
    }
    
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    email: state.auth.email
})


export default connect(mapStateToProps, { setUserData })(HeaderContainer)