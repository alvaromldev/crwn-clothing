import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { SignInButtons, SignInContainer, SignInTitle } from './sign-in.styles';

const SignIn = ({ handleEmailSignInStart, handleGoogleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userCredentials;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    handleEmailSignInStart(email, password);
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          onChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />

        <SignInButtons>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton
            type='button'
            onClick={handleGoogleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </SignInButtons>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleGoogleSignInStart: () => dispatch(googleSignInStart()),
  handleEmailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
