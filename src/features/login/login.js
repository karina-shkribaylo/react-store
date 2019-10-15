import React from "react";
import {render} from "react-dom";
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { connect } from 'react-redux';
import {setUserData} from './reducer'
import {Redirect} from "react-router-dom"

class LoginForm extends React.Component {

 
  render() {
    const { values, errors, touched, isSubmitting } =this.props;
    return (
      <div>
      <Form>
   <div>
     { touched.email && errors.email && <p>{errors.email}</p>}
     <Field type="email" name="email" placeholder="Email" />
   </div>
   <div>
   { touched.password && errors.password && <p>{errors.password}</p>}
     <Field type="password" name="password" placeholder="Password" />
   </div>
   
   <button disabled={isSubmitting} 
   >Submit</button>
 </Form>

 </div>
    )
  }
}


const Login = withFormik({
 mapPropsToValues({email, password }) {
   return{
     email: email || '',
     password: password || ''
   }
 },
 validationSchema: Yup.object().shape({
   email: Yup.string().email('Email is not valid').required('Email is required'),
   password: Yup.string().min(8, 'Password must be 8 characteds or longer ').required('Password is required')
 }),
 handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
   setTimeout(() => {
    localStorage.setItem('email', values.email) ;
    localStorage.setItem('password', values.password) ;
    return window.location='/market'
   }, 2000)
  
 }
})(LoginForm)
 
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
    email: state.auth.email
})

export default connect(mapStateToProps, {setUserData})(Login)


