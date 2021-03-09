import React, { Component } from 'react';
import FormInput from '../form-input/FormInput.component';
import './Sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils'

 class SignIn extends Component {
constructor(props){
    super(props)

    this.state = {
        email: "",
        password: ""
    }
}

handleSubmit = async event =>{
event.preventDefault();

const {email,password} = this.state
try{
 await auth.signInWithEmailAndPassword(email,password);

 this.setState({email: '', password: ''})
}catch(error){
console.log(error);
}

}

handleChange = event =>{
    const {value, name} = event.target;

    this.setState({[name]: value})
}

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have ana acoount</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} action="">

                    <FormInput handleChange={this.handleChange} name='email' type="text" value={this.state.email} required label='email'/>
                    

                    <FormInput handleChange={this.handleChange} name='password' type="password" value={this.state.password} required label='password'/>
                    
                         <div className='buttons'>
                         <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                         </div>
                    
                </form>
            </div>
        )
    }
}


export default SignIn;
