import React from 'react';
import {connect} from 'react-redux';
import Cart from '../cart';
import Login from './login';
import *  as axios from 'axios';


function Form (props) {
return <div> 

<Login />
</div>

}

function mapStateToProps(state)  {
    return {
    state
}
}

function mapDispatchToProps(dispatch) {
    return {}
}



export default connect(mapStateToProps, mapDispatchToProps)(Form )
