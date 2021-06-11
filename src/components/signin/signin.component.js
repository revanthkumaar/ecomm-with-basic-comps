import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { render } from 'node-sass';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'


class SignIn extends React.Component{

    constructor(props);
    super(props);
    this.state = {
        email:'',
        password:''
    }

    handleSubmit = async event => {
        const {email,password} = state;

        try{
            await auth.signInWithEmailAndPassword(email,password); //aysnc 
        }
        catch(error){
            console.log(error)
        }

    }





    render(){

    return (

        <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>

    )

    


}

export default SignIn;