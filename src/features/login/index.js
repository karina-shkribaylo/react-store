import React from 'react';
import {connect} from 'react-redux';
import Cart from '../cart';
import Login from './login';
import *  as axios from 'axios';

function submit(values, cart) {
    const { email, name} = values
    axios
        .post(`https://api.myjson.com/bins/622xq`, {
            order: {
                name,
                email
              
            }
        }).then(response => {
            if(response.errors) {
                alert('Something is wrong')
             
            }
                    document.location.href = `/homepage`
                
            
        })

}

function Form (props) {
return <div> 

<Login onSubmit={(values) => submit(values)}/>
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
