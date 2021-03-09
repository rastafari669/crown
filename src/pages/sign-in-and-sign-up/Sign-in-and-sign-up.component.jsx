import React from 'react';
import './Sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/Sign-in/Sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () =>(
    <div className='sign-inand-sign-up'>
    <SignIn/>
    <SignUp/>
    </div>
)
export default SignInAndSignUp;