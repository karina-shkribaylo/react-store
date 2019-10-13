import React from "react";
import {render} from "react-dom";
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import Homepage from '../../pages/homepage'
import { connect } from 'react-redux';
import {setUserData} from './reducer'
import {Redirect} from "react-router-dom"

class LoginForm extends React.Component {
  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const email = rememberMe ? localStorage.getItem('email') : '';
    const password = rememberMe ? localStorage.getItem('password') : '';

    this.setState({ email, password, rememberMe });
  }

 
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
   <label>
     <Field type="checkbox" name="rememberMe" checked={values.rememberMe} />
   Remember Me
   </label>
   <button disabled={isSubmitting} 
   >Submit</button>
 </Form>

 </div>
    )
  }
}


const Login = withFormik({
 mapPropsToValues({email, password, rememberMe }) {
   return{
     email: email || '',
     password: password || '',
     rememberMe: rememberMe || false
   }
 },
 validationSchema: Yup.object().shape({
   email: Yup.string().email('Email is not valid').required('Email is required'),
   password: Yup.string().min(8, 'Password must be 8 characteds or longer ').required('Password is required')
 }),
 handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
   setTimeout(() => {
     if(values.email === 'itcraft@test.com') {
       setErrors({email: 'That email is already taken'})
     }  else {
      
       resetForm()
       
     } 
     setSubmitting(false)
   }, 2000)
  // displayName: 'BasicForm'
 }
})(LoginForm)
 
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
    email: state.auth.email
})

export default connect(mapStateToProps, {setUserData})(Login)


